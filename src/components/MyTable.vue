<template>
        <table class="table-main">
            <tr><th>№</th><th>X</th><th>Y</th><th>Line</th><th>Operator</th><th>Time</th><th>Induction</th><th>Inclination</th><th>Declination</th></tr>
            <!-- <div id="acc_table">
                <tr v-for="item in accounts">
                    <td>{{ item.adv_lvl }}</td>
                    <td>{{ item['leg_count'] }}</td>
                    <td>{{ item['cher_count'] }}</td>
                    <td>{{ item['server'] }}</td>
                    <td>{{ item['login'] }}</td>
                    <td>{{ item['password'] }}</td>
                    <td>{{ item['mail_data'] }}</td>
                </tr>
            </div> -->
            <div>
                <tr v-for="point in points"
                    :key="point.id"
                >
                    <td> {{ point.id }} </td>
                    <td> {{ point.lineId }} </td>
                    <td> {{ point.x }} </td>
                    <td> {{ point.y }} </td>
                    <td> {{ point.thickness }} </td>
                    <td> {{ point.magneticStrength }} </td>
                    <td> {{ point.induction }} </td>
                    <td> {{ point.inclination }} </td>
                    <td> {{ point.declination }} </td>
                    <td> {{ point.operatorId }} </td>
                    <td> {{ point.datetime }} </td>
                </tr>
            </div>
        </table>

</template>

<script>

export default {
    name: "my-table",
    props: {
        points: {
            id: Number,
            lineId: Number,
            x: Number,
            y: Number,
            thickness: Number,
            magneticStrength: Number,
            induction: Number,
            inclination: Number,
            declination: Number,
            operatorId: Number,
            datetime: String,
        },
    }
}
</script>

<style lang="scss" scoped>
$table-string-height-hover: ceil(calc($base-font-size * 2));
$padding: 15px;
$header-height: $base-font-size;
$load-height: $base-font-size;
$content-padding-top: calc($header-height + $load-height + 5*$padding);

.table-main {
    height: 100vh;
    width: 100%;
    position: relative;
    border-collapse: collapse;
    text-align: center;
    overflow: auto;
}

th {
    position: sticky;
    top: 0;
    // background: linear-gradient(0deg,rgba(105, 98, 140) 2.000%,  rgb(49,45,91) 98.000%);
    background: $table-string-background-hover;
    padding: 0px 8px;
    height: 50px;
    border-bottom: $table-title-border-line solid 2px;
    
}

th:first-child{
    max-width: calc(4 * $padding);
    font-size: 15px;
    overflow-wrap: break-word; 
    word-wrap: break-word;
    word-break: keep-all;
}

td {
    color: white;
    padding: 9px 8px;
    transition: .1s linear;
}

tr {
    border-bottom: $table-separate-line solid 2px;
}

tr:last-child {
    border-bottom: 0px solid red;
}

tr:hover td {
    height: $table-string-height-hover;
    color: $table-title-border-line;
    background: $table-string-background-hover;
}

</style>
  