import ApiService from "../../services/service";
import Base from "./base"

export default class GetPage extends Base {
    componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id) {
            this.loadData();
        }   
    }

    loadData = () => {
        if (typeof this.service === 'function') {
            this.service(this.props.id)
                .then(this.onDataLoaded)
                .catch(this.onError);
        } else {
            console.error("Service is not a function");
        }
    }

    componentDidMount = () => {
        const service = new ApiService();
        this.service = service.getPage;
        this.loadData();
    }
}