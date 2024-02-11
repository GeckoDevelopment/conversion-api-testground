interface UserData {
    fn: string[];
    ln: string[];
    em: string[];
    ph: string[];
    client_user_agent: string;
    client_ip_address: string;
  }
  
  interface CustomData {
    currency: string;
    value: string;
  }
  
  export interface FormSendingData {
    event_name: string;
    event_id: string;
    event_time: number;
    action_source: string;
    event_source_url: string;
    user_data: UserData;
  }