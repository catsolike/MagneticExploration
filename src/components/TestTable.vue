<template>
        <table class="table-main">
            <tr><th>ID</th><th>X</th><th>Y</th><th>Толщина</th><th>Магнитная силa</th><th>Индукция</th><th>Наклонение</th><th>Склонение</th><th>Оператор</th><th>Время измерения</th></tr>
             
            <tr v-for="item in items"
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
        </table>
</template>

<script>
export default {
    name: "test-table",
    props: {
        items: Array,
    }
}
// ID  X Y Толщина(м) Магнитная силa(нанотесла) 	Индукция(нанотесла)	Наклонение(градусы)	Склонение(градусы)	ID оператора Время измерения
</script>
// points: {
//         // id: Number,
//         // lineId: Number,
//         // x: Number,
//         // y: Number,
//         // thickness: Number,
//         // magneticStrength: Number,
//         // induction: Number,
//         // inclination: Number,
//         // declination: Number,
//         // operatorId: Number,
//         // datetime: String,
//     },

<style lang="scss" scoped>
$header-height: $base-font-size;
.table-main {
    border-collapse: collapse;
    width: 100%;
    text-align: center;
}
th {
    position: sticky;
    top: 0;
    background: $table-string-background-hover;
    font-weight: normal;
    padding: 0px 8px;
    height: $header-height;
}
td {
    color: white;
    padding: 9px 8px;
    transition: .1s linear;
}

tr:first-child {
    border-top: $table-separate-line solid 0px;
}

tr {
    border-top: $table-separate-line solid 2px;
}

tr:hover td {    
    color: $table-title-border-line;
    background: $table-string-background-hover;
}
</style>
  