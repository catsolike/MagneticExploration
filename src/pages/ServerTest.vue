<template>
    <div class="datapage-grid">
        <custom-button  class="logout-btn"
        @click="$router.push('/login')"
        >Log Out</custom-button>
        
        <div class="open-out-btn-wrapper">
            <custom-button class="open-out-btn"
                    @click="$router.push('/graphic')"
                    >Go to full graphic</custom-button>
        </div>

        <div class="projects-list">
            <custom-select  class="projects-list__select"
                            :placeholder-text="'Choose project'"
                            :options="projects"
                            v-model="selectedProjectId"
            ></custom-select>

            <custom-button class="projects-list__add-btn"
                            title="Add new project"
                            @click="activateProjectAdding"
            >
                +
            </custom-button>
        </div>
                    
        <div class="areas-list">
            <custom-select  class="areas-list__select"
                            :placeholder-text="'Choose area...'"
                            :options="areas"
                            v-model="selectedAreaId"
            ></custom-select>
                
            <custom-button class="areas-list__add-btn"
                title="Add new area"
                @click="activateAreaAdding"
            >
                +
            </custom-button>
        </div>
        
        <div class="lines-list">
            <custom-select  class="lines-list__select"
                            :placeholder-text="'Choose line...'"
                            :options="lines"
                            v-model="selectedLineId"
            ></custom-select>

            <custom-button class="lines-list__add-btn"
                            title="Add new line"
                            @click="activateLineAdding"
            >
                +
            </custom-button>
        </div>
    
        <!-- v-model:modelValue="searchQuery" -->
        <!-- <div class="search-wrapper">
            <custom-text-input  placeholder="Search..."
                                class="search-input"
            ></custom-text-input>
        </div> -->

        <p class="about-table__points-info"
        >Points
            <custom-button class="lines-list__add-btn"
                            title="Add new point"
                            @click="activatePointAdding"
            >
            +
            </custom-button>
        </p>
        <p class="about-table__measurements-info">Measurements</p>
    
        <div class="table-wrapper">
            <test-table class="table-element"
                        :items="pointsOnLine"
            ></test-table>
        </div>



        <!-- IF -->

        <div class="add-edit-forms-wrapper"
             v-if="this.projectAdding"
        >
            <add-project v-model:isAdding="projectAdding"
                         :link="defaultLink"
            ></add-project>
        </div>

        <div class="add-edit-forms-wrapper"
             v-else-if="this.areaAdding"
        >
            <add-area v-model:isAdding="areaAdding"
            ></add-area>
        </div>

        <div class="add-edit-forms-wrapper"
             v-else-if="this.lineAdding"
        >
            <add-line v-model:isAdding="lineAdding"
            ></add-line>
        </div>

        <div class="add-edit-forms-wrapper"
             v-else-if="this.pointAdding"
        >
            <add-point v-model:isAdding="pointAdding"
            ></add-point>
        </div>

        <div class="graphic-wrapper"
             v-else-if="pointsOnArea.length > 0"
        >
            <test-mountain class="graphic-element"
                           :items="pointsOnArea"
            ></test-mountain>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import TestTable from '@/components/TestTable.vue';
import TestMountain from '@/components/Graphs/TestMountain.vue'

export default {
    name: "test-page",
    components: {
        TestTable,
        TestMountain
    },
    data() {
        return {
            projectAdding: false,
            areaAdding: false,
            lineAdding: false,
            pointAdding: false,
            defaultLink: "https://catsolike.mrsmori.moe",
            selectedProjectId: null,
            selectedAreaId: null,
            selectedLineId: null,
            projects: [],
            areas: [ {name:'Сначала выберите проект'} ],
            lines: [ { name: 'Сначала выберите площадь' }],
            pointsOnArea: [],
            pointsOnLine: [],
            // points: [
            //     { id: 1,  lineId: 1, x: 10, y: 10, thickness: 1, magneticStrength: 50,  induction: 50,  /* [50, 100, 150, 200, 250, 300, 350, 400, 450, 500], */ inclination: 30, declination: -10, operatorId: 1001,	    datetime: "2022-01-01 10:00:00", },
            //     { id: 2,  lineId: 1, x: 20, y: 10, thickness: 3, magneticStrength: 100, induction: 100, /* [1, 2, 3, 4, 5, 2, 3, 4, 5, 1], inclination: 60, */ declination: 5, operatorId: 1002,	    datetime: "2022-01-02 11:30:00", },
            //     { id: 3,  lineId: 1, x: 30, y: 10, thickness: 2, magneticStrength: 75,  induction: 75,  /* [1, 2, 3, 4, 5, 2, 3, 4, 5, 1], inclination: 45, */ declination: -20, operatorId: 1001,	    datetime: "2022-01-03 14:15:00", },
            //     { id: 4,  lineId: 1, x: 40, y: 10, thickness: 5, magneticStrength: 75,  induction: 75,  /* [1, 2, 3, 4, 5, 2, 3, 4, 5, 1], inclination: 45, */ declination: -20, operatorId: 1001,	    datetime: "2022-01-03 14:15:00", },
            //     { id: 5,  lineId: 1, x: 50, y: 10, thickness: 1, magneticStrength: 75,  induction: 75,  /* [1, 2, 3, 4, 5, 2, 3, 4, 5, 1], inclination: 45, */ declination: -20, operatorId: 1001,	    datetime: "2022-01-03 14:15:00", },
            //     { id: 6,  lineId: 1, x: 60, y: 10, thickness: 2, magneticStrength: 75,  induction: 75,  /* [1, 2, 3, 4, 5, 2, 3, 4, 5, 1], inclination: 45, */ declination: -20, operatorId: 1001,	    datetime: "2022-01-03 14:15:00", },
            //     { id: 7,  lineId: 1, x: 70, y: 10, thickness: 5, magneticStrength: 75,  induction: 75,  /* [1, 2, 3, 4, 5, 2, 3, 4, 5, 1], inclination: 45, */ declination: -20, operatorId: 1001,	    datetime: "2022-01-03 14:15:00", },
            //     { id: 8,   lineId: 2, x: 15, y: 20, thickness: 3, magneticStrength: 50, induction: 50,  inclination: 30, declination: -10, operatorId: 1001,	    datetime: "2022-01-01 10:00:00", },
            //     { id: 9,   lineId: 2, x: 25, y: 20, thickness: 1, magneticStrength: 100,induction: 100, inclination: 60, declination: 5, operatorId: 1002,	    datetime: "2022-01-02 11:30:00", },
            //     { id: 10,  lineId: 2, x: 72, y: 20, thickness: 7, magneticStrength: 75, induction: 75,  inclination: 45, declination: -20, operatorId: 1001,	    datetime: "2022-01-03 14:15:00", },
            //     { id: 11,  lineId: 2, x: 73, y: 20, thickness: 6, magneticStrength: 75, induction: 75,  inclination: 45, declination: -20, operatorId: 1001,	    datetime: "2022-01-03 14:15:00", },
            //     { id: 12,  lineId: 2, x: 70, y: 20, thickness: 5, magneticStrength: 75, induction: 75,  inclination: 45, declination: -20, operatorId: 1001,	    datetime: "2022-01-03 14:15:00", },
            //     { id: 13,  lineId: 2, x: 77, y: 20, thickness: 6, magneticStrength: 75, induction: 75,  inclination: 45, declination: -20, operatorId: 1001,	    datetime: "2022-01-03 14:15:00", },
            //     { id: 14,  lineId: 2, x: 75, y: 20, thickness: 4, magneticStrength: 75, induction: 75,  inclination: 45, declination: -20, operatorId: 1001,	    datetime: "2022-01-03 14:15:00", },
            //     { id: 15,  lineId: 3, x: 10, y: 30, thickness: 2, magneticStrength: 50, induction: 50,  inclination: 30, declination: -10, operatorId: 1001, datetime: "2022-01-01 10:00:00", },
            //     { id: 16,  lineId: 3, x: 20, y: 30, thickness: 4, magneticStrength: 100,induction: 100, inclination: 60, declination: 5, operatorId: 1002,	    datetime: "2022-01-02 11:30:00", },
            //     { id: 17,  lineId: 3, x: 30, y: 30, thickness: 4, magneticStrength: 75, induction: 75,  inclination: 45, declination: -20, operatorId: 1001,	    datetime: "2022-01-03 14:15:00", },
            //     { id: 18,  lineId: 3, x: 40, y: 30, thickness: 6, magneticStrength: 75, induction: 75,  inclination: 45, declination: -20, operatorId: 1001,	    datetime: "2022-01-03 14:15:00", },
            //     { id: 19,  lineId: 3, x: 50, y: 30, thickness: 2, magneticStrength: 75, induction: 75,  inclination: 45, declination: -20, operatorId: 1001,	    datetime: "2022-01-03 14:15:00", },
            //     { id: 20,  lineId: 3, x: 60, y: 30, thickness: 3, magneticStrength: 75, induction: 75,  inclination: 45, declination: -20, operatorId: 1001,	    datetime: "2022-01-03 14:15:00", },
            //     { id: 21,  lineId: 3, x: 70, y: 30, thickness: 1, magneticStrength: 75, induction: 75,  inclination: 45, declination: -20, operatorId: 1001,	    datetime: "2022-01-03 14:15:00", },
            //     { id: 22,  lineId: 14, x: 10, y: 40, thickness: 9, magneticStrength: 75, induction: 75, inclination: 45, declination: -20, operatorId: 1001, datetime: "2022-01-03 14:15:00", },
            // ],
        }
    },
    mounted() {
        this.fetchProjects()
    },
    watch: {
        selectedProjectId() {
            this.fetchAreas(this.selectedProjectId)
        },
        selectedAreaId() {
            this.fetchLines(this.selectedAreaId)
        },
        selectedLineId() {
            this.fetchPointsOnLine(this.selectedLineId)
        },
    },
    methods:
    {
        activateProjectAdding() {
            this.projectAdding = true;
            this.areaAdding = false;
            this.lineAdding = false;
            this.pointAdding = false;
        },
        activateAreaAdding() {
            if (this.selectedProjectId !== null) {
                this.projectAdding = false;
                this.areaAdding = true;
                this.lineAdding = false;
                this.pointAdding = false;
            }
            else alert("Выберите проект")
        },
        activateLineAdding() {
            if (this.selectedAreaId !== null) {
                this.projectAdding = false;
                this.areaAdding = false;
                this.lineAdding = true;
                this.pointAdding = false;
            }
            else alert("Выберите площадь")
        },
        activatePointAdding() {
            if (this.selectedLineId !== null) {
                this.projectAdding = false;
                this.areaAdding = false;
                this.lineAdding = false;
                this.pointAdding = true;
            }
            else alert("Выберите линию")
        },
        async fetchProjects()
        {
            try {
                const response = await axios.get(`${this.defaultLink}/projects`,
                    { headers: { 'content-type': 'application/javascript' } })
                    this.projects = response.data;
            } catch (e) {
                alert(e)
            }
        },
        async fetchAreas(projectId) {
            try {
                const response = await axios.get(`${this.defaultLink}/areas`,
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
                const response = await axios.get(`${this.defaultLink}/lines`,
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
        // async fetchPointsOnArea(areaId) {
            
        // },
        async fetchPointsOnLine(lineId) {
            try {
                const response = await axios.get(`${this.defaultLink}/points`,
                    {
                        headers: { 'content-type': 'application/javascript' },
                        params: {
                            line_id: lineId,
                        }
                    })
                    this.pointsOnLine = response.data;
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
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 20fr;
}
.logout-btn {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row: 1;
    
    min-width: 50px;
    max-width: 150px;
}

.open-out-btn-wrapper{
    grid-column: 4;
    grid-row: 1;

    display: flex;
    justify-content: flex-end;
}

.open-out-btn{
    //background: url('@/assets/icons/open-out-btn.svg') no-repeat transparent;
    //border: 2px solid red;
    min-width: 50px;
    max-width: 150px;
}

.projects-list {
    grid-column: 1;
    grid-row: 2;

    display: flex;
    flex-direction: row;

    &__add-btn {
        margin: 0 0 0 5px;
    }
}

.areas-list {
    grid-column: 1;
    grid-row: 3;
    
    display: flex;
    flex-direction: row;
    //&__select {
    //}

    &__add-btn {
        margin: 0 0 0 5px;
    }
}

.lines-list {
    grid-column: 1;
    grid-row: 4;
    
    display: flex;
    flex-direction: row;
   //&__select {
   //}
    
    &__add-btn {
        margin: 0 0 0 5px;
    }
}


.about-table {
    &__points-info {
        grid-column: 2;
        grid-row: 1;

        display: flex;
        align-items: center;
    }
    
    &__measurements-info {
        grid-column: 3;
        grid-row: 1;
        
        display: flex;
        align-items: center;
    }
}

.table-wrapper { 
    grid-column-start: 2;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 6;

    overflow: auto;
    //height: 60vh;
    border: $table-border solid 2px;
    border-radius: 4px;
}

.add-edit-forms-wrapper{
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 5;
    grid-row-end: 6;
}

.graphic-wrapper{
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 5;
    grid-row-end: 6;
    position: relative;

    border: 2px solid rgb(229, 229, 229);
    border-radius: 4px;
}

.graphic-element{
    position: relative;
    z-index: 0;
}

</style>
  