import MerchantManagement from '../Pages/MerchantManagement';
import MerchantPayment from '../Pages/MerchantPayment';
import Parameters from '../Pages/Parameters';
import UserManagement from '../Pages/UserManagement';
import Demo from '../Pages/Demo';


const MenuListMap=()=>{
    
    const pageListMap = new Map();

    pageListMap.set("MerchantManagement",<MerchantManagement/>);
    pageListMap.set("MerchantPayment",<MerchantPayment />);
    pageListMap.set("Parameters",<Parameters />);
    pageListMap.set("UserManagement",<UserManagement />);
    pageListMap.set("Demo",<Demo />);

    return pageListMap

}
export { MenuListMap}