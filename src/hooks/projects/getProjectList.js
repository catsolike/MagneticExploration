import axios from 'axios'
import {onMounted, ref} from 'vue'

export function getProjectsList() {
    const projectsList = ref([]);
    const taking = async () => {
        try {
                const response = await axios.get('https://api.mrsmori.moe/projects_list', 
                {headers : {'content-type': 'application/javascript'}})
                projectsList.value = response.data;
        } catch (e) {
            alert('Error')
        }
        
        // created() {
        //     axios.get('https://api.mrsmori.moe/projects_list', {'headers' : {'content-type': 'application/javascript'}})
        //         .then((response) => {
        //             this.list_of_projects = response.data
        //         })
        //         .then((error) => {
        //             console.log(error)
        //         })
        // },
    }

    onMounted(taking)


    return {
        projectsList
    }
}
