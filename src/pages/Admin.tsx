import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, LogOut, Package, Upload, X, Settings, MessageCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import Toast from '../components/Toast';

interface Shipment {
  id: string;
  tracking_number: string;
  status: string;
  origin: string;
  destination: string;
  carrier: string;
  shipper_name: string;
  receiver_name: string;
  created_at: string;
}

interface Insurance {
  name: string;
  amount: string;
  paid: boolean;
}

interface SiteSettings {
  id?: string;
  site_email: string;
  site_phone: string;
  site_address: string;
  support_email: string;
  company_name: string;
  company_description: string;
}

interface ShipmentForm {
  tracking_number: string;
  status: string;
  origin: string;
  destination: string;
  carrier: string;
  carrier_reference: string;
  product: string;
  type_of_shipment: string;
  quantity: number;
  weight: string;
  payment_mode: string;
  shipment_mode: string;
  total_freight: string;
  expected_delivery_date: string;
  departure_date: string;
  departure_time: string;
  delivery_time: string;
  package_description: string;
  shipper_name: string;
  shipper_phone: string;
  shipper_email: string;
  shipper_address: string;
  receiver_name: string;
  receiver_phone: string;
  receiver_email: string;
  receiver_address: string;
  comment: string;
  image_url: string;
  insurances: Insurance[];
  import_tax: string;
  import_tax_paid: boolean;
  status_date: string;
  status_time: string;
  tracking_progress: number;
  tracking_stage: string;
}

export default function Admin() {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [saving, setSaving] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [newTrackingNumber, setNewTrackingNumber] = useState('');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [activeTab, setActiveTab] = useState<'shipments' | 'settings'>('shipments');
  const [siteSettings, setSiteSettings] = useState<SiteSettings>({
    site_email: '',
    site_phone: '',
    site_address: '',
    support_email: '',
    company_name: 'ChineLogistique',
    company_description: '',
  });
  const [savingSettings, setSavingSettings] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [whatsappPhone, setWhatsappPhone] = useState('');
  const [whatsappMessage, setWhatsappMessage] = useState('');
  const [selectedTrackingNumber, setSelectedTrackingNumber] = useState('');
  const [formData, setFormData] = useState<ShipmentForm>({
    tracking_number: '',
    status: '',
    origin: '',
    destination: '',
    carrier: '',
    carrier_reference: '',
    product: '',
    type_of_shipment: '',
    quantity: 0,
    weight: '',
    payment_mode: '',
    shipment_mode: '',
    total_freight: '',
    expected_delivery_date: '',
    departure_date: '',
    departure_time: '',
    delivery_time: '',
    package_description: '',
    shipper_name: '',
    shipper_phone: '',
    shipper_email: '',
    shipper_address: '',
    receiver_name: '',
    receiver_phone: '',
    receiver_email: '',
    receiver_address: '',
    comment: '',
    image_url: '',
    insurances: [],
    import_tax: '',
    import_tax_paid: false,
    status_date: '',
    status_time: '',
    tracking_progress: 0,
    tracking_stage: 'picked_up',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const initializeAdmin = async () => {
      await checkAuth();
      await fetchShipments();
      await fetchSiteSettings();
    };
    initializeAdmin();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      navigate('/login');
    }
  };

  const fetchShipments = async () => {
    try {
      const { data, error } = await supabase
        .from('shipments')
        .select('id, tracking_number, status, origin, destination, carrier, shipper_name, receiver_name, created_at')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setShipments(data || []);
    } catch (err) {
      console.error('Error fetching shipments:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchSiteSettings = async () => {
    try {
      const { data, error } = await supabase
        .from('site_settings')
        .select('*')
        .limit(1)
        .maybeSingle();

      if (error) throw error;
      if (data) {
        setSiteSettings({
          id: data.id,
          site_email: data.site_email || '',
          site_phone: data.site_phone || '',
          site_address: data.site_address || '',
          support_email: data.support_email || '',
          company_name: data.company_name || 'ChineLogistique',
          company_description: data.company_description || '',
        });
      }
    } catch (err) {
      console.error('Error fetching site settings:', err);
    }
  };

  const saveSiteSettings = async () => {
    setSavingSettings(true);
    try {
      if (siteSettings.id) {
        // Update existing settings
        const { error } = await supabase
          .from('site_settings')
          .update({
            site_email: siteSettings.site_email,
            site_phone: siteSettings.site_phone,
            site_address: siteSettings.site_address,
            support_email: siteSettings.support_email,
            company_name: siteSettings.company_name,
            company_description: siteSettings.company_description,
            updated_at: new Date().toISOString(),
          })
          .eq('id', siteSettings.id);

        if (error) throw error;
      } else {
        // Insert new settings
        const { data, error } = await supabase
          .from('site_settings')
          .insert([{
            site_email: siteSettings.site_email,
            site_phone: siteSettings.site_phone,
            site_address: siteSettings.site_address,
            support_email: siteSettings.support_email,
            company_name: siteSettings.company_name,
            company_description: siteSettings.company_description,
          }])
          .select()
          .single();

        if (error) throw error;
        if (data) {
          setSiteSettings({ ...siteSettings, id: data.id });
        }
      }
      setToast({ message: 'Site settings saved successfully!', type: 'success' });
    } catch (err) {
      console.error('Error saving site settings:', err);
      setToast({ message: 'Error saving site settings. Please try again.', type: 'error' });
    } finally {
      setSavingSettings(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setToast({ message: 'Please select an image file', type: 'error' });
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setToast({ message: 'Image size must be less than 5MB', type: 'error' });
      return;
    }

    setUploadingImage(true);

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('shipment-images')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) {
        setToast({ message: 'Error uploading image: ' + uploadError.message, type: 'error' });
        return;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('shipment-images')
        .getPublicUrl(filePath);

      setFormData({ ...formData, image_url: publicUrl });
      setImagePreview(publicUrl);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setToast({ message: 'Error uploading image: ' + errorMessage, type: 'error' });
    } finally {
      setUploadingImage(false);
    }
  };

  // Fonction pour générer un code de tracking automatique
  const generateTrackingNumber = () => {
    const prefix = 'CC';
    const randomPart = Math.floor(Math.random() * 100); // 0-99
    const timestampPart = Date.now().toString().slice(-6); // 6 derniers chiffres du timestamp
    return `${prefix}-${randomPart}-${timestampPart}`;
  };

  // Fonction de validation des champs
  const validateForm = () => {
    const errors: Record<string, string> = {};

    // Validation des champs requis
    if (!formData.origin.trim()) errors.origin = 'Origin is required';
    if (!formData.destination.trim()) errors.destination = 'Destination is required';
    if (!formData.carrier.trim()) errors.carrier = 'Carrier is required';
    if (!formData.shipper_name.trim()) errors.shipper_name = 'Shipper name is required';
    if (!formData.receiver_name.trim()) errors.receiver_name = 'Receiver name is required';
    
    // Validation email
    if (formData.shipper_email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.shipper_email)) {
      errors.shipper_email = 'Invalid email format';
    }
    if (formData.receiver_email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.receiver_email)) {
      errors.receiver_email = 'Invalid email format';
    }

    // Validation téléphone (format simple)
    if (formData.shipper_phone && !/^[+]?[0-9\s\-()]+$/.test(formData.shipper_phone)) {
      errors.shipper_phone = 'Invalid phone format';
    }
    if (formData.receiver_phone && !/^[+]?[0-9\s\-()]+$/.test(formData.receiver_phone)) {
      errors.receiver_phone = 'Invalid phone format';
    }

    // Validation quantité
    if (formData.quantity < 0) {
      errors.quantity = 'Quantity must be positive';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submission started');
    console.log('Form data:', formData);
    
    // Valider le formulaire
    if (!validateForm()) {
      setToast({ message: 'Please fill in all required fields correctly', type: 'error' });
      return;
    }

    setSaving(true);

    try {
      if (editingId) {
        const { error } = await supabase
          .from('shipments')
          .update({ ...formData, updated_at: new Date().toISOString() })
          .eq('id', editingId);

        if (error) throw error;
        
        setToast({ message: 'Shipment updated successfully!', type: 'success' });
      } else {
        // Générer un code de tracking si non fourni
        const trackingNumber = formData.tracking_number || generateTrackingNumber();
        const shipmentData = { ...formData, tracking_number: trackingNumber };
        
        const { error } = await supabase
          .from('shipments')
          .insert([shipmentData]);

        if (error) throw error;
        
        // Afficher le modal de succès avec le code de tracking
        setNewTrackingNumber(trackingNumber);
        setShowSuccessModal(true);
      }

      setShowForm(false);
      setEditingId(null);
      resetForm();
      fetchShipments();
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setToast({ message: 'Error saving shipment: ' + errorMessage, type: 'error' });
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = async (id: string) => {
    try {
      const { data, error } = await supabase
        .from('shipments')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      setFormData({
        tracking_number: data.tracking_number,
        status: data.status,
        origin: data.origin,
        destination: data.destination,
        carrier: data.carrier,
        carrier_reference: data.carrier_reference,
        product: data.product,
        type_of_shipment: data.type_of_shipment,
        quantity: data.quantity,
        weight: data.weight,
        payment_mode: data.payment_mode,
        shipment_mode: data.shipment_mode,
        total_freight: data.total_freight,
        expected_delivery_date: data.expected_delivery_date,
        departure_date: data.departure_date,
        departure_time: data.departure_time,
        delivery_time: data.delivery_time,
        package_description: data.package_description,
        shipper_name: data.shipper_name,
        shipper_phone: data.shipper_phone,
        shipper_email: data.shipper_email,
        shipper_address: data.shipper_address,
        receiver_name: data.receiver_name,
        receiver_phone: data.receiver_phone,
        receiver_email: data.receiver_email,
        receiver_address: data.receiver_address,
        comment: data.comment,
        image_url: data.image_url,
        insurances: data.insurances || [],
        import_tax: data.import_tax || '',
        import_tax_paid: data.import_tax_paid || false,
        status_date: data.status_date || '',
        status_time: data.status_time || '',
        tracking_progress: data.tracking_progress || 0,
        tracking_stage: data.tracking_stage || 'picked_up',
      });
      setImagePreview(data.image_url || null);
      setEditingId(id);
      setShowForm(true);
    } catch (err) {
      console.error('Error fetching shipment:', err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this shipment?')) return;

    try {
      const { error } = await supabase
        .from('shipments')
        .delete()
        .eq('id', id);

      if (error) throw error;
      fetchShipments();
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setToast({ message: 'Error deleting shipment: ' + errorMessage, type: 'error' });
    }
  };

  const handleOpenWhatsApp = (trackingNumber: string) => {
    setSelectedTrackingNumber(trackingNumber);
    setWhatsappPhone('');
    setWhatsappMessage(`Bonjour, votre numéro de suivi est : ${trackingNumber}`);
    setShowWhatsAppModal(true);
  };

  const handleSendWhatsApp = () => {
    if (!whatsappPhone.trim()) {
      setToast({ message: 'Veuillez entrer un numéro de téléphone', type: 'error' });
      return;
    }

    if (whatsappPhone.length !== 9) {
      setToast({ message: 'Le numéro doit contenir exactement 9 chiffres', type: 'error' });
      return;
    }

    // Nettoyer le numéro de téléphone et ajouter le préfixe +237
    const cleanPhone = whatsappPhone.replace(/[^0-9]/g, '');
    const fullPhone = `237${cleanPhone}`;
    
    // Encoder le message pour l'URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Ouvrir WhatsApp avec le message prérempli
    const whatsappUrl = `https://wa.me/${fullPhone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    // Fermer le modal
    setShowWhatsAppModal(false);
    setWhatsappPhone('');
    setWhatsappMessage('');
    setSelectedTrackingNumber('');
  };

  const resetForm = () => {
    setFormData({
      tracking_number: '',
      status: '',
      origin: '',
      destination: '',
      carrier: '',
      carrier_reference: '',
      product: '',
      type_of_shipment: '',
      quantity: 0,
      weight: '',
      payment_mode: '',
      shipment_mode: '',
      total_freight: '',
      expected_delivery_date: '',
      departure_date: '',
      departure_time: '',
      delivery_time: '',
      package_description: '',
      shipper_name: '',
      shipper_phone: '',
      shipper_email: '',
      shipper_address: '',
      receiver_name: '',
      receiver_phone: '',
      receiver_email: '',
      receiver_address: '',
      comment: '',
      image_url: '',
      insurances: [],
      import_tax: '',
      import_tax_paid: false,
      status_date: '',
      status_time: '',
      tracking_progress: 0,
      tracking_stage: 'picked_up',
    });
    setImagePreview(null);
    setFormErrors({});
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-red-600 text-white p-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Package size={32} />
            <h1 className="text-2xl font-bold">Shipment Admin Dashboard</h1>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-700 hover:bg-red-800 px-4 py-2 rounded-lg transition"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </header>

      <main className="container mx-auto p-6">
        {/* Tabs Navigation */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex gap-8">
              <button
                onClick={() => setActiveTab('shipments')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition ${
                  activeTab === 'shipments'
                    ? 'border-red-600 text-red-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Package size={20} />
                  Shipments Management
                </div>
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition ${
                  activeTab === 'settings'
                    ? 'border-red-600 text-red-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Settings size={20} />
                  Site Settings
                </div>
              </button>
            </nav>
          </div>
        </div>

        {/* Shipments Tab */}
        {activeTab === 'shipments' && (
          <>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-800">Shipments</h2>
              <button
                onClick={() => {
                  resetForm();
                  setEditingId(null);
                  setShowForm(true);
                }}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                <Plus size={20} />
                Add New Shipment
              </button>
            </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tracking Number
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Origin
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Destination
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Shipper
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Receiver
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {shipments.map((shipment) => (
                    <tr key={shipment.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {shipment.tracking_number}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {shipment.status}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {shipment.origin}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {shipment.destination}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {shipment.shipper_name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {shipment.receiver_name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleOpenWhatsApp(shipment.tracking_number)}
                          className="text-green-600 hover:text-green-900 mr-4"
                          title="Envoyer via WhatsApp"
                        >
                          <MessageCircle size={18} />
                        </button>
                        <button
                          onClick={() => handleEdit(shipment.id)}
                          className="text-blue-600 hover:text-blue-900 mr-4"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(shipment.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full my-8">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">
                {editingId ? 'Edit Shipment' : 'Add New Shipment'}
              </h3>
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                  resetForm();
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tracking Number *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.tracking_number}
                    onChange={(e) => setFormData({ ...formData, tracking_number: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <input
                    type="text"
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Origin *
                  </label>
                  <input
                    type="text"
                    value={formData.origin}
                    onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                      formErrors.origin 
                        ? 'border-red-500 focus:ring-red-600' 
                        : 'border-gray-300 focus:ring-red-600'
                    }`}
                  />
                  {formErrors.origin && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.origin}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Destination *
                  </label>
                  <input
                    type="text"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                      formErrors.destination 
                        ? 'border-red-500 focus:ring-red-600' 
                        : 'border-gray-300 focus:ring-red-600'
                    }`}
                  />
                  {formErrors.destination && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.destination}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Carrier *
                  </label>
                  <input
                    type="text"
                    value={formData.carrier}
                    onChange={(e) => setFormData({ ...formData, carrier: e.target.value })}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                      formErrors.carrier 
                        ? 'border-red-500 focus:ring-red-600' 
                        : 'border-gray-300 focus:ring-red-600'
                    }`}
                  />
                  {formErrors.carrier && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.carrier}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Carrier Reference
                  </label>
                  <input
                    type="text"
                    value={formData.carrier_reference}
                    onChange={(e) => setFormData({ ...formData, carrier_reference: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product
                  </label>
                  <input
                    type="text"
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Shipment
                  </label>
                  <input
                    type="text"
                    value={formData.type_of_shipment}
                    onChange={(e) => setFormData({ ...formData, type_of_shipment: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity
                  </label>
                  <input
                    type="number"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 0 })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Weight
                  </label>
                  <input
                    type="text"
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Mode
                  </label>
                  <input
                    type="text"
                    value={formData.payment_mode}
                    onChange={(e) => setFormData({ ...formData, payment_mode: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Shipment Mode
                  </label>
                  <input
                    type="text"
                    value={formData.shipment_mode}
                    onChange={(e) => setFormData({ ...formData, shipment_mode: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Total Freight
                  </label>
                  <input
                    type="text"
                    value={formData.total_freight}
                    onChange={(e) => setFormData({ ...formData, total_freight: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Delivery Date
                  </label>
                  <input
                    type="date"
                    value={formData.expected_delivery_date}
                    onChange={(e) => setFormData({ ...formData, expected_delivery_date: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Departure Date
                  </label>
                  <input
                    type="date"
                    value={formData.departure_date}
                    onChange={(e) => setFormData({ ...formData, departure_date: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Departure Time
                  </label>
                  <input
                    type="text"
                    value={formData.departure_time}
                    onChange={(e) => setFormData({ ...formData, departure_time: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="e.g., 13:30 AT"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Time
                  </label>
                  <input
                    type="text"
                    value={formData.delivery_time}
                    onChange={(e) => setFormData({ ...formData, delivery_time: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="e.g., 15:00"
                  />
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Shipper Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Shipper Name *
                    </label>
                    <input
                      type="text"
                      value={formData.shipper_name}
                      onChange={(e) => setFormData({ ...formData, shipper_name: e.target.value })}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        formErrors.shipper_name 
                          ? 'border-red-500 focus:ring-red-600' 
                          : 'border-gray-300 focus:ring-red-600'
                      }`}
                    />
                    {formErrors.shipper_name && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.shipper_name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Shipper Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.shipper_phone}
                      onChange={(e) => setFormData({ ...formData, shipper_phone: e.target.value })}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        formErrors.shipper_phone 
                          ? 'border-red-500 focus:ring-red-600' 
                          : 'border-gray-300 focus:ring-red-600'
                      }`}
                      placeholder="+33 1 23 45 67 89"
                    />
                    {formErrors.shipper_phone && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.shipper_phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Shipper Email
                    </label>
                    <input
                      type="email"
                      value={formData.shipper_email}
                      onChange={(e) => setFormData({ ...formData, shipper_email: e.target.value })}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        formErrors.shipper_email 
                          ? 'border-red-500 focus:ring-red-600' 
                          : 'border-gray-300 focus:ring-red-600'
                      }`}
                      placeholder="example@email.com"
                    />
                    {formErrors.shipper_email && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.shipper_email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Shipper Address
                    </label>
                    <input
                      type="text"
                      value={formData.shipper_address}
                      onChange={(e) => setFormData({ ...formData, shipper_address: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Receiver Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Receiver Name *
                    </label>
                    <input
                      type="text"
                      value={formData.receiver_name}
                      onChange={(e) => setFormData({ ...formData, receiver_name: e.target.value })}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        formErrors.receiver_name 
                          ? 'border-red-500 focus:ring-red-600' 
                          : 'border-gray-300 focus:ring-red-600'
                      }`}
                    />
                    {formErrors.receiver_name && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.receiver_name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Receiver Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.receiver_phone}
                      onChange={(e) => setFormData({ ...formData, receiver_phone: e.target.value })}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        formErrors.receiver_phone 
                          ? 'border-red-500 focus:ring-red-600' 
                          : 'border-gray-300 focus:ring-red-600'
                      }`}
                      placeholder="+33 1 23 45 67 89"
                    />
                    {formErrors.receiver_phone && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.receiver_phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Receiver Email
                    </label>
                    <input
                      type="email"
                      value={formData.receiver_email}
                      onChange={(e) => setFormData({ ...formData, receiver_email: e.target.value })}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        formErrors.receiver_email 
                          ? 'border-red-500 focus:ring-red-600' 
                          : 'border-gray-300 focus:ring-red-600'
                      }`}
                      placeholder="example@email.com"
                    />
                    {formErrors.receiver_email && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.receiver_email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Receiver Address
                    </label>
                    <input
                      type="text"
                      value={formData.receiver_address}
                      onChange={(e) => setFormData({ ...formData, receiver_address: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Comment / Additional Information
                    </label>
                    <textarea
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>

                  {/* Status Date and Time */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Status Date
                      </label>
                      <input
                        type="date"
                        value={formData.status_date}
                        onChange={(e) => setFormData({ ...formData, status_date: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Status Time
                      </label>
                      <input
                        type="time"
                        value={formData.status_time}
                        onChange={(e) => setFormData({ ...formData, status_time: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                      />
                    </div>
                  </div>

                  {/* Tracking Progress */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tracking Stage
                    </label>
                    <select
                      value={formData.tracking_stage}
                      onChange={(e) => setFormData({ ...formData, tracking_stage: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    >
                      <option value="picked_up">Picked Up</option>
                      <option value="in_transit">In Transit</option>
                      <option value="customs">In Customs</option>
                      <option value="out_for_delivery">Out for Delivery</option>
                      <option value="delivered">Delivered</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tracking Progress (0-100%)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={formData.tracking_progress}
                      onChange={(e) => setFormData({ ...formData, tracking_progress: parseInt(e.target.value) || 0 })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>

                  {/* Insurances */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Insurances
                    </label>
                    <div className="space-y-4">
                      {formData.insurances.map((insurance, index) => (
                        <div key={index} className="flex gap-4 items-start p-4 bg-gray-50 rounded-lg">
                          <div className="flex-1">
                            <input
                              type="text"
                              placeholder="Insurance name"
                              value={insurance.name}
                              onChange={(e) => {
                                const newInsurances = [...formData.insurances];
                                newInsurances[index].name = e.target.value;
                                setFormData({ ...formData, insurances: newInsurances });
                              }}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 mb-2"
                            />
                            <input
                              type="text"
                              placeholder="Amount (e.g., 135000 CFA)"
                              value={insurance.amount}
                              onChange={(e) => {
                                const newInsurances = [...formData.insurances];
                                newInsurances[index].amount = e.target.value;
                                setFormData({ ...formData, insurances: newInsurances });
                              }}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                            />
                            <label className="flex items-center gap-2 mt-2">
                              <input
                                type="checkbox"
                                checked={insurance.paid}
                                onChange={(e) => {
                                  const newInsurances = [...formData.insurances];
                                  newInsurances[index].paid = e.target.checked;
                                  setFormData({ ...formData, insurances: newInsurances });
                                }}
                                className="rounded border-gray-300 text-red-600 focus:ring-red-600"
                              />
                              <span className="text-sm text-gray-700">Paid</span>
                            </label>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              const newInsurances = formData.insurances.filter((_, i) => i !== index);
                              setFormData({ ...formData, insurances: newInsurances });
                            }}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                          >
                            <X size={20} />
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => {
                          setFormData({
                            ...formData,
                            insurances: [...formData.insurances, { name: '', amount: '', paid: false }]
                          });
                        }}
                        className="w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-red-600 hover:text-red-600 transition"
                      >
                        + Add Insurance
                      </button>
                    </div>
                  </div>

                  {/* Import Tax */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Import Tax
                    </label>
                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="e.g., 150000 CFA"
                        value={formData.import_tax}
                        onChange={(e) => setFormData({ ...formData, import_tax: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                      />
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={formData.import_tax_paid}
                          onChange={(e) => setFormData({ ...formData, import_tax_paid: e.target.checked })}
                          className="rounded border-gray-300 text-red-600 focus:ring-red-600"
                        />
                        <span className="text-sm text-gray-700">Import Tax Paid</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Shipment Image
                    </label>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <label className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg cursor-pointer hover:bg-red-700 transition">
                          <Upload size={20} />
                          {uploadingImage ? 'Uploading...' : 'Upload Image'}
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            disabled={uploadingImage}
                            className="hidden"
                          />
                        </label>
                        {uploadingImage && (
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <svg className="animate-spin h-4 w-4 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Uploading image...
                          </div>
                        )}
                      </div>

                      {imagePreview && (
                        <div className="relative inline-block">
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="max-w-xs rounded-lg border border-gray-300"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              setImagePreview(null);
                              setFormData({ ...formData, image_url: '' });
                            }}
                            className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full hover:bg-red-700"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      )}

                      <p className="text-xs text-gray-500">
                        Upload an image of the shipment (max 5MB). Supported formats: JPG, PNG, WebP, GIF
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingId(null);
                    resetForm();
                  }}
                  disabled={saving}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving || uploadingImage}
                  className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {saving ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Saving...
                    </>
                  ) : (
                    editingId ? 'Update Shipment' : 'Create Shipment'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
          </>
        )}

        {/* Site Settings Tab */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Site Settings</h2>
            <p className="text-gray-600 mb-8">Manage your site information and contact details displayed on the website.</p>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={siteSettings.company_name}
                    onChange={(e) => setSiteSettings({ ...siteSettings, company_name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="ChineLogistique"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Site Email
                  </label>
                  <input
                    type="email"
                    value={siteSettings.site_email}
                    onChange={(e) => setSiteSettings({ ...siteSettings, site_email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="contact@chinelogistique.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Support Email
                  </label>
                  <input
                    type="email"
                    value={siteSettings.support_email}
                    onChange={(e) => setSiteSettings({ ...siteSettings, support_email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="support@chinelogistique.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={siteSettings.site_phone}
                    onChange={(e) => setSiteSettings({ ...siteSettings, site_phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="+86 123 456 7890"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    value={siteSettings.site_address}
                    onChange={(e) => setSiteSettings({ ...siteSettings, site_address: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Hong Kong"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Description
                  </label>
                  <textarea
                    value={siteSettings.company_description}
                    onChange={(e) => setSiteSettings({ ...siteSettings, company_description: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Brief description of your company..."
                  />
                </div>
              </div>

              <div className="flex justify-end pt-6 border-t border-gray-200">
                <button
                  onClick={saveSiteSettings}
                  disabled={savingSettings}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {savingSettings ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Saving...
                    </>
                  ) : (
                    'Save Settings'
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Shipment Created!</h3>
              <p className="text-gray-600 mb-6">Your shipment has been successfully created.</p>
              
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 mb-6">
                <p className="text-sm font-medium text-gray-700 mb-2">Tracking Number:</p>
                <p className="text-2xl font-bold text-red-600 select-all">{newTrackingNumber}</p>
              </div>

              <p className="text-sm text-gray-500 mb-6">
                Share this tracking number with your customer to track the shipment.
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(newTrackingNumber);
                    setToast({ message: 'Tracking number copied to clipboard!', type: 'success' });
                  }}
                  className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium"
                >
                  Copy Code
                </button>
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Modal */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Envoyer via WhatsApp</h3>
              <button
                onClick={() => {
                  setShowWhatsAppModal(false);
                  setWhatsappPhone('');
                  setWhatsappMessage('');
                  setSelectedTrackingNumber('');
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Numéro de téléphone WhatsApp *
                </label>
                <div className="flex items-center">
                  <span className="inline-flex items-center px-4 py-2 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg text-gray-700 font-medium">
                    +237
                  </span>
                  <input
                    type="tel"
                    value={whatsappPhone}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, '');
                      setWhatsappPhone(value);
                    }}
                    placeholder="6XX XX XX XX"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    autoFocus
                    maxLength={9}
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Entrez uniquement les 9 chiffres du numéro (sans l'indicatif)
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  value={whatsappMessage}
                  onChange={(e) => setWhatsappMessage(e.target.value)}
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 resize-none"
                  placeholder="Votre message ici..."
                />
                <p className="mt-1 text-xs text-gray-500">
                  Vous pouvez modifier le message avant de l'envoyer
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start">
                  <MessageCircle className="text-green-600 mr-3 mt-0.5" size={20} />
                  <div>
                    <p className="text-sm font-medium text-green-900">Numéro de suivi</p>
                    <p className="text-sm text-green-700 mt-1">{selectedTrackingNumber}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowWhatsAppModal(false);
                    setWhatsappPhone('');
                    setWhatsappMessage('');
                    setSelectedTrackingNumber('');
                  }}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition font-medium"
                >
                  Annuler
                </button>
                <button
                  onClick={handleSendWhatsApp}
                  className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  Envoyer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
