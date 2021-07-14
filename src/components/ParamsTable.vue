<template>
    <h3 class="have-sign">参数说明</h3>
    <div>
        <table>
        <thead>
            <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in paramsList" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.desc }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.default }}</td>
            </tr>
        </tbody></table>
    </div>
</template>

<script>
export default {
    props: {
        paramsList: {
            type: Array,
            default() {
                return []
            }
        }
    },
}
</script>
<style lang="scss" scoped>
    h3{
        margin-top: 30px;
    }
    div{
        overflow: hidden;overflow-x: auto;
    }
    @media(max-width: 500px) {
        table{
            width: 130%;
        }
    }
</style>