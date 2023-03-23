import axios from 'axios'
import {onMounted, ref} from 'vue'

export function getPointsList() {
    const pointsList = ref();
    const taking = async () => {
        try {
                const response = await axios.get('https://api.mrsmori.moe/get_points', 
                {headers : {'content-type': 'application/javascript'}})
                pointsList.value = response.data;
        } catch (e) {
            alert('Error')
        }
    }

    onMounted(taking)


    return {
        pointsList
    }
}
