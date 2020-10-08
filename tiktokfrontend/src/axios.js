import axios from "axios";

const instances = axios.create({
    baseURL:"https://newtiktokmern.herokuapp.com/"
});
export default instances;