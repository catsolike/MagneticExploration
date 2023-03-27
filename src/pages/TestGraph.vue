<template>
    <div class="datapage-grid">
        <custom-select  class="project-select"
                        :placeholder-text="'Choose project'"
                        :options="projects"

                        v-model="selectedProjectId"
        ></custom-select>
                        
        <custom-select  class="area-select"
                        :placeholder-text="'Choose area...'"
                        :options="filteredAreas"

                        v-model="selectedAreaId"
        ></custom-select>
        
        <custom-select  class="profile-select"
                        :placeholder-text="'Choose profile...'"
                        :options="filteredLines"
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
            <test-table class="table-element"
                        :items="filteredPoints"
            ></test-table>
        </div>

        
            <!-- <table>
                <tr><th>ID</th><th>X</th><th>Y</th><th>Толщина</th><th>Магнитная силa</th><th>Индукция</th><th>Наклонение</th><th>Склонение</th><th>Оператор</th><th>Время измерения</th></tr>
                    
                    <tr v-for="item in filteredPoints"
                        :key="item.id"
                    >
                        <td> {{ item.id }} </td>
                        <td> {{ item.x }} </td>
                        <td> {{ item.y }} </td>
                        <td> {{ item.thickness }} </td>
                        <td> {{ item.magneticStrength }} </td>
                        <td> {{ item.induction }} </td>
                        <td> {{ item.inclination }} </td>
                        <td> {{ item.declination }} </td>
                        <td> {{ item.operatorId }} </td>
                        <td> {{ item.datetime }} </td>
                    </tr>
            </table> -->

        <div class="graphic-wrapper">
            <!-- <p class="graphic-element">Здесь будет график...</p> -->
            <test-mountain class="graphic-wrapper__mountain"
                            :items="filteredPoints"
            ></test-mountain>
            <!-- <ribbons-plots  :chart-data="chartData" 
                            :chart-layout="chartLayout"
            ></ribbons-plots> -->
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
import TestMountain from '@/components/Graphs/TestMountain.vue'
// import RibbonsPlots from '@/components/Graphs/RibbonsPlots.vue'

export default {
    name: "test-page",
    components: {
        TestTable,
        TestMountain,
        // RibbonsPlots
    },
    data() { 
        return {
            // chartData: [
            //     {
            //     x: [1, 2, 3],
            //     y: [1, 2, 3],
            //     z: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
            //     colorscale: 'YlGnBu',
            //     type: 'surface'
            //     },
            //     // Add more trace objects as needed
            // ],
            // chartLayout: {
            //     title: 'Ribbon Plot',
            //     showlegend: false,
            //     autosize: true,
            //     width: 600,
            //     height: 600,
            //     scene: {
            //     xaxis: {title: 'Sample #'},
            //     yaxis: {title: 'Wavelength'},
            //     zaxis: {title: 'OD'}
            //     }
            // },
            xData: [1, 2, 3, 4, 5],
            yData: [1, 2, 3, 4, 5],
            zData: [
                [1, 2, 3, 4, 5],
                [7, 3, 4, 5, 6],
                [8, 4, 5, 6, 7],
                [9, 5, 6, 7, 8],
                [5, 6, 7, 8, 9],
            ],
            pointsTaked: false,
            selectedProjectId: "1",
            selectedAreaId: "1",
            selectedLineId: "1",
            projects: [
                { id: 1, name: 'Project 1' },
                { id: 2, name: 'Project 2' },
                { id: 3, name: 'Project 3' },
            ],
            areas: [
                { id: 1, name: 'Area 1 for Project 1', projectId: 1 },
                { id: 2, name: 'Area 2 for Project 1', projectId: 1 },
                { id: 3, name: 'Area 1 for Project 2', projectId: 2 },
                { id: 4, name: 'Area 2 for Project 2', projectId: 2 },
                { id: 5, name: 'Area 1 for Project 3', projectId: 3 },
            ],
            lines: [
                { id: 1, name: 'L1 A1', areaId: 1},
                { id: 2, name: 'L2 A1', areaId: 1},
                { id: 3, name: 'L1 A2', areaId: 2},
                { id: 4, name: 'L1 A3', areaId: 3},
                { id: 5, name: 'L2 A3', areaId: 3},
                { id: 6, name: 'L3 A3', areaId: 3},
                { id: 7, name: 'L1 A4', areaId: 4},
                { id: 8, name: 'L2 A4', areaId: 4},
                { id: 9, name: 'L1 A1', areaId: 5},
            ],
            // ID  X Y LineId	    Толщина Магнитная 	Индукция	Наклонение	Склонение	ID 	        Время измерения
            //                      (м)	    силa        (нанотесла)             (градусы)   оператора
            //                              (нанотесла)             (градусы)
            points: [
                { id: 0, lineId: 1, x: 10, y: 20, thickness: 30, magneticStrength: 50, induction: 60, inclination: 30, declination: -10, operatorId: 1001,	    datetime: "2022-01-01 10:00:00", },
                { id: 2, lineId: 1, x: 20, y: 20, thickness: 20, magneticStrength: 100, induction: 80, inclination: 60, declination: 5, operatorId: 1002,	    datetime: "2022-01-02 11:30:00", },
                { id: 3, lineId: 1, x: 30, y: 20, thickness: 40, magneticStrength: 75, induction: 90, inclination: 45, declination: -20, operatorId: 1001,	    datetime: "2022-01-03 14:15:00", },
                { id: 4, lineId: 1, x: 40, y: 20, thickness: 25, magneticStrength: 80, induction: 70, inclination: 10, declination: -15, operatorId: 1003,	    datetime: "2022-01-04 16:45:00", },
                { id: 5, lineId: 2, x: 50, y: 30, thickness: 35, magneticStrength: 90, induction: 85, inclination: 20, declination: 5, operatorId: 1002,	    datetime: "2022-01-05 09:00:00", },
                { id: 6, lineId: 2, x: 60, y: 30, thickness: 30, magneticStrength: 70, induction: 95, inclination: 40, declination: 15, operatorId: 1001,	    datetime: "2022-01-06 12:30:00", },
                { id: 7, lineId: 3, x: 70, y: 40, thickness: 35, magneticStrength: 85, induction: 75, inclination: 50, declination: -5, operatorId: 1003,	    datetime: "2022-01-07 15:45:00", },
                { id: 8, lineId: 3, x: 80, y: 40, thickness: 20, magneticStrength: 70, induction: 60, inclination: 30, declination: -10, operatorId: 1002,	    datetime: "2022-01-08 17:30:00", },
                { id: 9, lineId: 3, x: 90, y: 40, thickness: 25, magneticStrength: 60, induction: 70, inclination: 45, declination: -20, operatorId: 1001,	    datetime: "2022-01-09 10:15:00", },
                { id: 10,lineId: 4, x: 100, y: 50, thickness: 30, magneticStrength: 80, induction: 90, inclination: 10, declination: -15, operatorId: 1003,	    datetime: "2022-01-10 13:00:00", },
                { id: 11,lineId: 1, x: 100, y: 50, thickness: 30, magneticStrength: 80, induction: 90, inclination: 10, declination: -15, operatorId: 1003,	    datetime: "2022-01-10 13:00:00", },
                { id: 12,lineId: 1, x: 100, y: 50, thickness: 30, magneticStrength: 80, induction: 90, inclination: 10, declination: -15, operatorId: 1003,	    datetime: "2022-01-10 13:00:00", },
                { id: 13,lineId: 1, x: 100, y: 50, thickness: 30, magneticStrength: 80, induction: 90, inclination: 10, declination: -15, operatorId: 1003,	    datetime: "2022-01-10 13:00:00", },
                { id: 14,lineId: 1, x: 100, y: 50, thickness: 30, magneticStrength: 80, induction: 90, inclination: 10, declination: -15, operatorId: 1003,	    datetime: "2022-01-10 13:00:00", },
                { id: 15,lineId: 1, x: 100, y: 50, thickness: 30, magneticStrength: 80, induction: 90, inclination: 10, declination: -15, operatorId: 1003,	    datetime: "2022-01-10 13:00:00", },
                { id: 16,lineId: 1, x: 100, y: 50, thickness: 30, magneticStrength: 80, induction: 90, inclination: 10, declination: -15, operatorId: 1003,	    datetime: "2022-01-10 13:00:00", },
                { id: 17,lineId: 1, x: 100, y: 50, thickness: 30, magneticStrength: 80, induction: 90, inclination: 10, declination: -15, operatorId: 1003,	    datetime: "2022-01-10 13:00:00", },
                { id: 18,lineId: 1, x: 100, y: 50, thickness: 30, magneticStrength: 80, induction: 90, inclination: 10, declination: -15, operatorId: 1003,	    datetime: "2022-01-10 13:00:00", },
                { id: 19,lineId: 1, x: 100, y: 50, thickness: 30, magneticStrength: 80, induction: 90, inclination: 10, declination: -15, operatorId: 1003,	    datetime: "2022-01-10 13:00:00", },
            ],
        }
    },
    computed: {
        filteredAreas() {
            return this.areas.filter((area) => area.projectId === Number(this.selectedProjectId));
        },
        filteredLines() {
            return this.lines.filter((line) => line.areaId === Number(this.selectedAreaId));
        },
        filteredPoints() {
            return this.points.filter((point) => point.lineId === Number(this.selectedLineId));
        },
    },

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

    &__mountain {
        width: 100%;
        height: 100%;
    }
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
  