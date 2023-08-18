<script setup lang="ts">
import PageLayout from "../../layouts/page-layout/PageLayout.vue"

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
        Programming with interaction nets.
      </div>

      <div class="flex md:flex-row flex-col md:max-w-3xl my-12 self-center">
        <div class="border-4 border-black mx-3 rounded-lg md:px-8 md:py-6 px-3 py-2 text-xl">
          <pre class="whitespace-pre">{{ exampleCode }}</pre>
        </div>

        <div class="px-10 py-6 text-xl">
          <pre>TODO Canvas of rules.</pre>
        </div>
      </div>

      <div
        class="md:text-7xl text-6xl px-6 max-w-sm self-center text-blance py-10 font-bold"
      >
        Fun. <br />
        Simple. <br />
        Inspiring. <br />
      </div>

      <div class="max-w-sm self-center py-10 text-xl">
        TODO 8 statements and 7 words.
      </div>
    </div>
  </PageLayout>
</template>
