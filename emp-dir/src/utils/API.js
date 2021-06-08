import axios from 'axios';

export default {
    employeeResults: function() {
        return axios.get("https://randomuser.me/api/?seed=keon&nat=gb,us&results=20");
    }
};