<script setup>
import {useRouter} from 'vue-router'
const router=useRouter()

const go=()=>{
    router.push('/test/detail')
}
</script>

<template>
    <div>
        <button @click="go">详情</button>
    </div>
</template>