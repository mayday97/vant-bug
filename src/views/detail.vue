<script setup>
import {ref,onMounted} from 'vue'
import {ImagePreview } from 'vant'
let text=ref(`<p class="ql-align-justify">目前市场关心的几个问题：</p><p class="ql-align-justify"><br></p><p class="ql-align-justify">1）利率债能趋势做多吗？</p><p class="ql-align-justify"><br></p><p class="ql-align-justify">2）商品还有机会吗？</p><p class="ql-align-justify"><br></p><p class="ql-align-justify">3）股票的向上触发是什么？</p><p><br></p><p class="ql-align-justify">回答上述问题，先看下面这张图，可以回答很大一部分的问题。从社融总量来看，全社会的融资边际增速已经开始明显回落，并且在今年10-11月之前，大体保持回落趋势。但在内部结构中，居民端的经营贷（中长期）仍然保持较强的增长。我们可以把<strong><u>经营贷当成投机性、利率承受能力最强的融资部分。</u></strong>能够动用经营贷的居民，都是加杠杆能力和意愿很强的群体。<strong><u>对于开发商的融资意义，它有点像之前的非标。</u></strong>因为资管新规和三道红线的约束，开发商在表外渠道的融资受限，目前的现金流主要依靠销售回款。而<strong><u>经营贷，可以被认为是销售回款中，最具杠杆投机性的部分。</u></strong></p><p><br></p><p><img src="https://hongze.oss-cn-shanghai.aliyuncs.com/test/161872583328710.png"></p><p><br></p><p class="ql-align-justify">这部分的融资不收缩，它会对央行的货币政策构成制约。也就是回答<strong><u>第一个问题，“利率债能趋势做多吗？”目前看，需要等待经营贷增速出现回落。否则，利率还是一个区间震荡的概念。</u></strong></p><p><br></p><p><img src="https://hongze.oss-cn-shanghai.aliyuncs.com/test/161872584860454.png"></p><p><br></p><p class="ql-align-justify">第二个问题，“商品还有机会吗？”从融资的结构看，总量增速已经回落，意味着三季度逐渐国内的库存周期向下摆动的概率在增大。但<strong><u>地产相关的融资，包括经营贷，目前仍然保持扩张，意味着地产链条相对其他非地产链条的需求，将更具有韧性。</u></strong>这是近期盘面呈现商品分化，离地产更近的工业品强于非地产链工业品的重要原因（供给差异也是影响因素）。在社融总量增速进一步回落的情况下，上述状态可能还会维持一段时间。</p><p class="ql-align-justify">&nbsp;</p><p class="ql-align-justify">第三个问题，“股票的向上触发”，主要是要看到信用环境的重新宽松。想发生，我们要经历“地产相关融资收缩→央行重新宽松货币→政府发现经济回落风险→信用环境重新扩张”等步骤，当然也要看到估值配合回归到适中水平。显然凑齐上述因素，需要时间。</p>`)

onMounted(() => {
    $(document).on('click', '.content-wrap img', function (event) {
        let imgArray = [];
        let curImageSrc = $(this).attr('src');
        let oParent = $(this).parent();
        if (curImageSrc && !oParent.attr('href')) {
            $('.content-wrap img').each(function (index, el) {
                let itemSrc = $(this).attr('src');
                imgArray.push(itemSrc);
            });
            // wx.previewImage({ current: curImageSrc, urls: imgArray });
            ImagePreview({
                images: imgArray,
                startPosition: imgArray.indexOf(curImageSrc)||0,
                overlayStyle:{
                    background: 'rgba(0, 0, 0, 0.9)'
                },
                teleport:'.report-detail'
            });
        }
    })
})

</script>

<template>
    <div class="report-detail">
        <div class="content-wrap">
            <div v-html="text"></div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.report-detail{
    :deep(img) {
        width: 100%;
        display: block;
        margin: 20px 0;
    }
}
</style>