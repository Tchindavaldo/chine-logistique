import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface SiteSettings {
  site_email: string;
  site_phone: string;
  site_address: string;
  support_email: string;
  company_name: string;
  company_description: string;
}

export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettings>({
    site_email: 'contact@chinelogistique.com',
    site_phone: '+86 123 456 7890',
    site_address: 'Hong Kong',
    support_email: 'support@chinelogistique.com',
    company_name: 'ChineLogistique',
    company_description: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const { data, error } = await supabase
          .from('site_settings')
          .select('*')
          .limit(1)
          .maybeSingle();

        if (error) {
          console.error('Error fetching site settings:', error);
        } else if (data) {
          setSettings({
            site_email: data.site_email || 'contact@chinelogistique.com',
            site_phone: data.site_phone || '+86 123 456 7890',
            site_address: data.site_address || 'Hong Kong',
            support_email: data.support_email || 'support@chinelogistique.com',
            company_name: data.company_name || 'ChineLogistique',
            company_description: data.company_description || '',
          });
        }
      } catch (err) {
        console.error('Error fetching site settings:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  return { settings, loading };
}
