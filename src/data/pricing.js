import starter from '../assets/images/starter.png';
import business from '../assets/images/business.png';
import enterprise from '../assets/images/enterprise.png';

export default[
    {
        title: "Starter",
        icon:starter,
        monthly: 2000,
        annually: 200,
        is_frequent:false,
        features:[
            "Post up to 3 Job per Month",
            "Unlimited Team Staff Accounts",
            "Partner Success Email Support",
            "Early Access to Acquisition Event Opportunities",
        ]
    },
    {
        title: "Business",
        icon:business,
        monthly: 4500 ,
        annually: 400,
        is_frequent:true,
        features:[
            "Post up to 5 Jobs per Month",
            "Unlimited Team Staff Accounts",
            "Partner Success Team Support",
            "Early Access to Acquisition Event Opportunities",
            "Access to New Platform Features",
        ]
    },
    {
        title: "Enterprise",
        icon:enterprise,
        monthly: 7200,
        annually: 600,
        is_frequent:false,
        features:[
            "Post up to 10 Jobs per Month",
            "Unlimited Team Staff Accounts",
            "Partner Success Manager",
            "Early Access to Acquisition Event Opportunities",
            "Access to New Platform Features",
        ]
    },
]