<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'

const exampleCode = `\
rule zero add
  (add)-addend
  return-(add)
end

rule add1 add
  (add)-addend
  (add1)-prev add
  add1 return-(add)
end
`
</script>

<template>
  <PageLayout>
    <div class="flex flex-col p-3">
      <div class="text-7xl text-center text-blance pt-16 font-bold">iNet</div>
      <div class="text-3xl text-center text-blance py-10">
        <Lang>
          <template #zh> 用可反应的网编程。 </template>
          <template #en> Programming with interaction nets. </template>
        </Lang>
      </div>

      <div class="flex sm:flex-row flex-col sm:max-w-3xl my-12 self-center">
        <div
          class="border-4 border-black dark:border-white mx-3 rounded-lg sm:px-8 sm:py-6 px-3 py-2 text-xl"
        >
          <pre class="whitespace-pre">{{ exampleCode }}</pre>
        </div>

        <div class="px-10 py-6 text-xl">
          <pre>TODO Canvas of rules.</pre>
        </div>
      </div>

      <div class="flex flex-col items-start px-6 py-10 self-center max-w-md">
        <div class="sm:text-4xl text-3xl text-blance font-bold">
          <Lang>
            <template #zh> 语言参考手册 </template>
            <template #en> Language Reference Manual </template>
          </Lang>
        </div>

        <div class="py-6 text-xl">TODO 8 statements and 7 words.</div>
      </div>
    </div>
  </PageLayout>
</template>
