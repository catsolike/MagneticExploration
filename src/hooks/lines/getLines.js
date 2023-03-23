import axios from 'axios'
import {onMounted, ref} from 'vue'

export function getLinesList() {
    const linesList = ref();
    const taking = async () => {
        try {
                const response = await axios.get('https://api.mrsmori.moe/get_lines', 
                {headers : {'content-type': 'application/javascript'}})
                linesList.value = response.data;
        } catch (e) {
            alert('Error')
        }
    }

    onMounted(taking)


    return {
        linesList
    }
}
