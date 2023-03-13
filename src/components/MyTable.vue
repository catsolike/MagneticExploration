<template>
    <div class="table-back ">
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
            <tr>
                <td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td>
            </tr>
            <tr>
                <td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td>
            </tr>
            <tr>
                <td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td>
            </tr>
            <tr>
                <td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td>
            </tr>
            <tr>
                <td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td>
            </tr>
            <tr>
                <td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td>
            </tr>
            <tr>
                <td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td>
            </tr>
            <tr>
                <td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td>
            </tr>
            <tr>
                <td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td>
            </tr>
            <tr>
                <td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td>
            </tr>
            <tr>
                <td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td>
            </tr>
            <tr>
                <td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td>
            </tr>
            <tr>
                <td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td>
            </tr>
            <tr>
                <td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td>
            </tr>
            <tr>
                <td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td>
            </tr>
            <tr>
                <td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td>
            </tr>
            <tr>
                <td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td>
            </tr>
            <tr>
                <td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td>
            </tr>
            <tr>
                <td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td>
            </tr>
            <tr>
                <td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td>
            </tr>
            <tr>
                <td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td>
            </tr>
            <tr>
                <td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td>
            </tr>
            <tr>
                <td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td>
            </tr>
            <tr>
                <td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td>
            </tr>
            <tr>
                <td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td>
            </tr>
            <tr>
                <td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td><td>a</td><td>b</td><td>c</td>
            </tr>
        </table>
    </div>
</template>

<script>

export default {
    name: "my-table",
}
</script>

<style lang="scss" scoped>

//colors
$table-border: rgb(229, 229, 229);
$table-separate-line: rgb(229, 229, 229);
//$table-background: rgb(85, 85, 95);
$table-background: rgb(157, 154, 161);
$table-title-border-line: rgb(177,93,255);
$table-string-background-hover: rgb(51,51,61);


$table-string-height-hover: ceil(calc($base-font-size * 2));
$padding: 15px;
$header-height: $base-font-size;
$load-height: $base-font-size;
$content-padding-top: calc($header-height + $load-height + 5*$padding);
.table-back {
    overflow: auto;
    //background: $table-background;
    // background: linear-gradient(140deg, rgba(255, 255, 255, 0) 18.000%, rgba(11, 11, 177, 0.3) 88.000%);
    // backdrop-filter: blur(30px);
    border: $table-border solid 2px;
    border-radius: 4px;
}

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

th:last-child {
    border-bottom: 0px solid red;
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

tr:hover td {
    height: $table-string-height-hover;
    color: $table-title-border-line;
    background: $table-string-background-hover;
}

</style>
  