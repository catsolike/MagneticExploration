import axios from 'axios'
import { ref} from 'vue'

export function getAreasList() {
    const selectedProject = ref('')
    const areasList = ref();
    // const taking = async () => {
        try {
            console.log('хмм 0 +', selectedProject.value)
            
            const response = axios.get('https://api.mrsmori.moe/get_areas', 
            {
                headers : {'content-type': 'application/json'},
                params: {
                    project_id: selectedProject.value,
                }
            }
        )
        console.log('хмм 1', selectedProject.value),
                areasList.value = response.data;
            console.log('хмм 2', selectedProject.value)

        } catch (e) {
            alert('Error: ' + e)
        }
    // }


    return {
        areasList, selectedProject
    }
}
