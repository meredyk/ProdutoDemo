<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {usePage} from "@inertiajs/vue3";


const stats = [
  { id: 1, name: 'Total de Categorias', value: '3' },
  { id: 2, name: 'Total de Produtos', value: '44' },
  { id: 3, name: 'Valor em Produtos', value: 'R$ 46,000' },
]

const user = usePage().props.auth.user;

</script>

<template>
  <AppLayout title="Dashboard">

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-6">



            <div class="bg-white py-24 sm:py-32">
              <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">

                  <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt class="text-base leading-7 text-gray-600">Total de Categorias</dt>
                    <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{{ user.categories_total }}</dd>
                  </div>

                  <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt class="text-base leading-7 text-gray-600">Total de Produtos</dt>
                    <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{{ user.products_total }}</dd>
                  </div>

                  <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt class="text-base leading-7 text-gray-600">Valor em Produtos</dt>
                    <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{{ user.products_total_price }}</dd>
                  </div>

                </dl>
              </div>
            </div>



        </div>
      </div>
    </div>
  </AppLayout>
</template>
