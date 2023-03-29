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

        <div class="graphic-wrapper">
            <!-- <p class="graphic-element">Здесь будет график...</p> -->
            <test-mountain class="graphic-wrapper__mountain"
                            :items="points"
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
    name: "test-graph",
    components: {
        TestTable,
        TestMountain,
        // RibbonsPlots
    },
    mounted() {
        this.logs()
    },
    data() { 
        return {
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

            // Point ID	X Coordinate	Y Coordinate	Thickness (m)	Magnetic Strength (nanotesla)	Induction (nanotesla)	Inclination (degrees)	Declination (degrees)	Operator ID	Measurement Time
            // 1	10	20	30	50	60	30	-10	1001	2022-01-01 10:00:00
            // 2	20	30	20	100	80	60	5	1002	2022-01-02 11:30:00
            // 3	30	40	40	75	90	45	-20	1001	2022-01-03 14:15:00
            // 4	40	50	25	80	70	10	-15	1003	2022-01-04 16:45:00
            // 5	50	60	35	90	85	20	5	1002	2022-01-05 09:00:00
            // 6	60	70	30	70	95	40	15	1001	2022-01-06 12:30:00
            // 7	70	80	35	85	75	50	-5	1003	2022-01-07 15:45:00
            // 8	80	90	20	70	60	30	-10	1002	2022-01-08 17:30:00
            // 9	90	100	25	60	70	45	-20	1001	2022-01-09 10:15:00
            // 10	100	110	30	80	90	10	-15	1003	2022-01-10 13:45:00

            //                                                                                   1    2   3
            //                                                                                   1    1   1
            points: [
                { id: 10,  lineId: 1, x: 100, y: 100, thickness: 30, magneticStrength: 50, induction: [50, 100, 150, 200, 250, 300, 350, 400, 450, 500], inclination: 30, declination: -10, operatorId: 1001,	    datetime: "2022-01-01 10:00:00", },
                { id: 20,  lineId: 2, x: 200, y: 200, thickness: 20, magneticStrength: 100,induction: [1, 2, 3, 4, 5, 2, 3, 4, 5, 1], inclination: 60, declination: 5, operatorId: 1002,	    datetime: "2022-01-02 11:30:00", },
                { id: 30,  lineId: 3, x: 300, y: 300, thickness: 40, magneticStrength: 75, induction: [1, 2, 3, 4, 5, 2, 3, 4, 5, 1], inclination: 45, declination: -20, operatorId: 1001,	    datetime: "2022-01-03 14:15:00", },
                { id: 30,  lineId: 1, x: 400, y: 400, thickness: 40, magneticStrength: 75, induction: [1, 2, 3, 4, 5, 2, 3, 4, 5, 1], inclination: 45, declination: -20, operatorId: 1001,	    datetime: "2022-01-03 14:15:00", },
                { id: 30,  lineId: 1, x: 500, y: 500, thickness: 40, magneticStrength: 75, induction: [1, 2, 3, 4, 5, 2, 3, 4, 5, 1], inclination: 45, declination: -20, operatorId: 1001,	    datetime: "2022-01-03 14:15:00", },
                { id: 30,  lineId: 1, x: 600, y: 600, thickness: 40, magneticStrength: 75, induction: [1, 2, 3, 4, 5, 2, 3, 4, 5, 1], inclination: 45, declination: -20, operatorId: 1001,	    datetime: "2022-01-03 14:15:00", },
                { id: 30,  lineId: 1, x: 700, y: 700, thickness: 40, magneticStrength: 75, induction: [1, 2, 3, 4, 5, 2, 3, 4, 5, 1], inclination: 45, declination: -20, operatorId: 1001,	    datetime: "2022-01-03 14:15:00", },
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
    methods: {
        logs() {
            console.log(this.points.map(item => Number(item.x)));
            console.log(this.points.map(item => Number(item.y)));
            console.log(this.points.map(item => Number(item.induction)));
        }
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
  