<script setup>
import HomeLayout from "@/Layouts/HomeLayout.vue";
import {usePage, Link} from "@inertiajs/vue3";

import PrimaryButton from "@/Components/PrimaryButton.vue";

const products = usePage().props.products;

</script>

<template>
  <HomeLayout title="Home">

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div v-if="products.length" class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-6">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">Listagem dos produtos</h2>
          <div class="bg-white py-5 sm:py-5">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">

              <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">

                <div v-for="product in products" :key="product.id" class="group relative">
                  <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img :src="product.image_url"  class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                  </div>
                  <div class="mt-4 flex justify-between">
                    <div>
                      <p class="text-gray-700 text-start text-xl w-full">
                          {{ product.name }}
                      </p>
                      <p class="text-gray-700 text-start text-sm text-indigo-600">
                        Por: {{ product.created_by }}
                      </p>
                      <p class="mt-1 text-sm text-gray-500 text-start">{{ product.description }}</p>
                    </div>
                    <p class="text-gray-900 text-xl font-bold w-full text-end">{{ product.price_br }}</p>
                  </div>
                </div>

              </dl>
            </div>
          </div>



        </div>
        <div v-else class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-6 text-center pt-16 pb-16">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">Nenhum produto foi cadastrado até o momento</h2>

          <Link :href="route('dashboard')">
            <PrimaryButton class="mt-5">Cadastre-se agora</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>

  </HomeLayout>
</template>
