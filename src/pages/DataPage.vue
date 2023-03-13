<template>
    <div class="datapage-grid">
        <custom-select  class="area-select"
                        :placeholder-text="'Choose area...'"
                        ></custom-select>
        <custom-select  class="profile-select"
                        :placeholder-text="'Choose profile...'"
        ></custom-select>
    
        <div class="search-wrapper">
            <custom-text-input  placeholder="Search..."
                                class="search-input"
            ></custom-text-input>
        </div>

        <p class="about-table__points-info">Points</p>
        <p class="about-table__measurements-info">Measurements</p>
    
        <div class="table-wrapper">
            <my-table class="table-element"></my-table>
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
import MyTable from '@/components/MyTable.vue';

export default {
    name: "data-page",
    components: {
        MyTable
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

.area-select{
    grid-column: 1;
    grid-row: 1;
}

.profile-select{
    grid-column: 2;
    grid-row: 1;
}

.search-wrapper {
    grid-column-start: 1;
    grid-column-end: 3;
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
    grid-row: 4;

    max-height: 90vh; 
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
  