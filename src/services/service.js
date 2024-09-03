const API_SERVICE = "http://localhost:5000";

export default class ApiService {
    constructor() {
        this._apiBase = API_SERVICE;
    }
    
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not featch ${url}, status ${res.status}`)
        }
        
        return await res.json();
    }

    getMainMenu = async () => {
        const meinMenuItems = await this.getResource("/menu");
        
        return meinMenuItems;
    }
    getAdresses = async () => {
        const adresses = await this.getResource("/adress");
        
        return adresses;
    }
    getMaterial = async (id) => {
        const material = await this.getResource(`/services/${id}`)
        
        return material;
    }
}

