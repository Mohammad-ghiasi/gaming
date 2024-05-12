import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'c054942ec04345c6a70882983245baba'
    }
})