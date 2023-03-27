<template>
    <div class="datapage-grid">
        <custom-select  class="project-select"
                        :placeholder-text="'Choose project'"
                        :options="projects"
                        v-model="selectedProjectId"
        ></custom-select>
                        
        <custom-select  class="area-select"
                        :placeholder-text="'Choose area...'"
                        :options="areas"
                        v-model="selectedAreaId"
        ></custom-select>
        
        <custom-select  class="profile-select"
                        :placeholder-text="'Choose profile...'"
                        :options="lines"
                        v-model="selectedLineId"
        ></custom-select>
    
        <div class="search-wrapper">
            <!-- v-model:modelValue="searchQuery" -->
            <custom-text-input  placeholder="Search..."
                                class="search-input"
            ></custom-text-input>
        </div>

        <p class="about-table__points-info">Points</p>
        <p class="about-table__measurements-info">Measurements</p>
    
        <div class="table-wrapper">
            <TestTable class="table-element"
            >
            </TestTable>
        </div>

        <div class="graphic-wrapper">
            <p class="graphic-element">Здесь будет график...</p>
        </div>
        
        <custom-button  class="logout-btn"
        @click="$router.push('/login')"
        >Log Out</custom-button>
        
        <div class="open-out-btn-wrapper">
            <custom-button class="open-out-btn"
                    @click="$router.push('/graphic')"
                    >Go to full graphic</custom-button>
        </div>
    </div>
</template>


<script>
import TestTable from '@/components/TestTable.vue';
import axios from 'axios';

export default {
    name: "test-page",
    components: {
        TestTable
    },
    data() {
        return {
            selectedProjectId: null,
            selectedAreaId: null,
            selectedLineId: null,
            projects: [],
            areas: [ {name:'Сначала выберите проект'} ],
            lines: [{ name: 'Сначала выберите площадь' }],
            points: [],
            // ID  X Y LineId	    Толщина Магнитная 	Индукция	Наклонение	Склонение	ID 	        Время измерения
            //                      (м)	    силa        (нанотесла)             (градусы)   оператора
            //                              (нанотесла)             (градусы)
            // points: [
            //     { id: 0, lineId: 1, x: 10, y: 20, thickness: 30, magneticStrength: 50, induction: 60, inclination: 30, declination: -10, operatorId: 1001,	    datetime: "2022-01-01 10:00:00", },
            //     { id: 2, lineId: 1, x: 20, y: 20, thickness: 20, magneticStrength: 100, induction: 80, inclination: 60, declination: 5, operatorId: 1002,	    datetime: "2022-01-02 11:30:00", },
            //     { id: 3, lineId: 1, x: 30, y: 20, thickness: 40, magneticStrength: 75, induction: 90, inclination: 45, declination: -20, operatorId: 1001,	    datetime: "2022-01-03 14:15:00", },
            //     { id: 4, lineId: 1, x: 40, y: 20, thickness: 25, magneticStrength: 80, induction: 70, inclination: 10, declination: -15, operatorId: 1003,	    datetime: "2022-01-04 16:45:00", },
            //     { id: 5, lineId: 2, x: 50, y: 30, thickness: 35, magneticStrength: 90, induction: 85, inclination: 20, declination: 5, operatorId: 1002,	    datetime: "2022-01-05 09:00:00", },
            //     { id: 6, lineId: 2, x: 60, y: 30, thickness: 30, magneticStrength: 70, induction: 95, inclination: 40, declination: 15, operatorId: 1001,	    datetime: "2022-01-06 12:30:00", },
            //     { id: 7, lineId: 3, x: 70, y: 40, thickness: 35, magneticStrength: 85, induction: 75, inclination: 50, declination: -5, operatorId: 1003,	    datetime: "2022-01-07 15:45:00", },
            //     { id: 8, lineId: 3, x: 80, y: 40, thickness: 20, magneticStrength: 70, induction: 60, inclination: 30, declination: -10, operatorId: 1002,	    datetime: "2022-01-08 17:30:00", },
            //     { id: 9, lineId: 3, x: 90, y: 40, thickness: 25, magneticStrength: 60, induction: 70, inclination: 45, declination: -20, operatorId: 1001,	    datetime: "2022-01-09 10:15:00", },
            //     { id: 10,lineId: 4, x: 100, y: 50, thickness: 30, magneticStrength: 80, induction: 90, inclination: 10, declination: -15, operatorId: 1003,	    datetime: "2022-01-10 13:00:00", },
            // ],
        }
    },
    mounted() {
        this.fetchProjects()
    },
    computed: {
        // filteredAreas() {
        //     return this.areas.filter((area) => area.projectId === Number(this.selectedProjectId));
        // },
        // filteredLines() {
        //     return this.lines.filter((line) => line.areaId === Number(this.selectedAreaId));
        // },
        // filteredPoints() {
        //     return this.points.filter((point) => point.lineId === Number(this.selectedLineId));
        // },
    },
    watch: {
        selectedProjectId() {
            this.fetchAreas(this.selectedProjectId)
        },
        selectedAreaId() {
            this.fetchLines(this.selectedAreaId)
        },
        selectedLineId() {
            this.fetchPoints(this.selectedLineId)
        },
    },
    methods:
    {
        async fetchProjects()
        {
            try {
                const response = await axios.get('https://api.mrsmori.moe/projects_list',
                    { headers: { 'content-type': 'application/javascript' } })
                    this.projects = response.data;
            } catch (e) {
                alert(e)
            }
        },
        async fetchAreas(projectId) {
            try {
                const response = await axios.get('https://api.mrsmori.moe/get_areas',
                    {
                        headers: { 'content-type': 'application/javascript' },
                        params: {
                            project_id: projectId,
                        }
                    })
                    this.areas = response.data;
            } catch (e) {
                console.log(e)
            }
        },
        async fetchLines(areaId) {
            try {
                const response = await axios.get('https://api.mrsmori.moe/get_lines',
                    {
                        headers: { 'content-type': 'application/javascript' },
                        params: {
                            area_id: areaId,
                        }
                    })
                    this.lines = response.data;
            } catch (e) {
                console.log(e)
            }
        },
        async fetchPoints(lineId) {
            try {
                const response = await axios.get('https://api.mrsmori.moe/get_lines',
                    {
                        headers: { 'content-type': 'application/javascript' },
                        params: {
                            line_id: lineId,
                        }
                    })
                    this.points = response.data;
            } catch (e) {
                console.log(e)
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.datapage-grid {
    color: $btn-text;
    display: inline-grid;
    gap: 20px;
    padding: 20px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 20fr 1fr;
}

.project-select {
    grid-column: 1;
    grid-row: 1;
}

.area-select{
    grid-column: 2;
    grid-row: 1;
}

.profile-select{
    grid-column: 1;
    grid-row: 2;
}

.search-wrapper {
    grid-column: 2;
    grid-row: 2;
}

.about-table{
    &__points-info {
        grid-column: 1;
        grid-row: 3;
    }
    
    &__measurements-info {
        grid-column: 2;
        grid-row: 3;
    }
}

.table-wrapper { 
    grid-column-start: 1;
    grid-column-end: 3;

    overflow: auto;
    grid-row: 4;
    height: 60vh;
    border: $table-border solid 2px;
    border-radius: 4px;
}

.graphic-wrapper{
    grid-column-start: 3;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 5;
    position: relative;

    border: 2px solid rgb(229, 229, 229);
    border-radius: 4px;
}

.graphic-element{
    position: relative;
    z-index: 0;
}

.logout-btn {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row: 5;
    
    min-width: 50px;
    max-width: 150px;
}

.open-out-btn-wrapper{
    grid-column: 3;
    grid-row: 5;

    display: flex;
    justify-content: flex-end;
}
.open-out-btn{
    //background: url('@/assets/icons/open-out-btn.svg') no-repeat transparent;
    //border: 2px solid red;
    min-width: 50px;
    max-width: 150px;
}

</style>
  