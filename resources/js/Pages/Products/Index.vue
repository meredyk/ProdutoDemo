<script setup>
import { ref } from 'vue';
import {Head, Link, useForm, usePage} from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import ActionMessage from '@/Components/ActionMessage.vue';
import FormSection from '@/Components/FormSection.vue';
import SectionBorder from '@/Components/SectionBorder.vue';
import TextArea from "@/Components/TextArea.vue";

defineProps({
  products: {
    type: Array,
    required: true,
  }
})

const form = useForm({
  name: '',
  description: '',
  price: null,
  category_id: null,
  image_url: '',
});

const submit = () => {
  form.transform(data => ({
    ...data
  })).post(route('products:store'), {
    onFinish: () => {
      if (form.recentlySuccessful) {
        form.name = '';
        form.description = '';
        form.price = '';
        form.category_id = '';
        form.image_url = '';
        setTimeout(() => formOpen.value = false, 1500);
      }
    },
  });
};

const formOpen = ref(false);

const categories = usePage().props.auth.user.categories;

</script>

<template>
  <AppLayout title="Produtos">

    <template #header>
      <div class="flex">
        <div class="flex-none">
          <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            Meus Produtos
          </h2>
        </div>

        <div class="flex-auto text-end">
          <PrimaryButton type="button" v-on:click.prevent = "formOpen = ! formOpen; form.name = null">
            Novo Produto
          </PrimaryButton>
        </div>

      </div>
    </template>

    <div v-show="formOpen">
      <div class="max-w-7xl mx-auto py-4 sm:px-6 lg:px-8">
        <FormSection @submit.prevent="submit">
          <template #title>
            Novo Produto
          </template>

          <template #description>
            Cadastre um novo produto com todas informações solicitadas.
          </template>
          <template #form>
            <!-- Name -->
            <div class="col-span-6 sm:col-span-4">
              <InputLabel for="name" value="Nome" />
              <TextInput
                id="name"
                v-model="form.name"
                type="text"
                class="mt-1 block w-full"
                required
                autocomplete="name"
              />
              <InputError :message="form.errors.name" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
              <InputLabel for="name" value="Descricao (min: 15 caracteres)" />
              <TextArea
                id="description"
                v-model="form.description"
                class="mt-1 block w-full"
                required
              >
              </TextArea>
              <InputError :message="form.errors.description" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
              <InputLabel for="name" value="Preço" />
              <TextInput
                id="price"
                type="number"
                v-model="form.price"
                class="mt-1 block w-1/2"
                required
              >
              </TextInput>
              <InputError :message="form.errors.price" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
              <InputLabel for="name" value="Categoria" />
              <select v-model="form.category_id" name="select" id="category" class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">
                <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
              </select>
              <InputError :message="form.errors.category_id" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
              <InputLabel for="name" value="URL da Imagem (opcional)" />
              <TextInput
                id="image_url"
                v-model="form.image_url"
                type="text"
                class="mt-1 block w-full"
              />
              <InputError :message="form.errors.image_url" class="mt-2" />
            </div>
          </template>

          <template #actions>
            <ActionMessage :on="form.recentlySuccessful" class="me-3">
              <p style="color: #009606">Salvado com sucesso.</p>
            </ActionMessage>

            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
              Salvar
            </PrimaryButton>
          </template>
        </FormSection>
      </div>
      <SectionBorder />
    </div>

    <div v-if="products.length > 0" class="py-3">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-6">
          <Link v-for="product in products" :key="product.id" :href="route('products:show', product.id)" class="flex border-b pb-5 pt-5">
            <div class="flex min-w-0 gap-x-4">
              <img class="h-12 w-12 flex-none rounded-full bg-gray-50" :src="product.image_url" alt="" />
              <div class="min-w-0 flex-auto">
                <div class="text-sm font-semibold leading-6 text-gray-900">
                  {{ product.name }}
                  <div class="center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-200 py-1 px-2 align-baseline font-sans text-xs font-bold uppercase leading-none text-base">
                    <div class="mt-px">{{ product.category }}</div>
                  </div>
                </div>
                <p class="mt-1 truncate text-xs leading-5 text-gray-500">{{ product.description }}</p>
              </div>
            </div>
            <div class="flex-auto w-32 text-end">
              {{ product.price_br }}
            </div>
          </Link>
        </div>
      </div>
    </div>

    <div v-else class="py-3">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-6 text-center">
          <p class="m-10 text-2xl">Você não possui nenhum produto cadastrado!</p>
        </div>
      </div>
    </div>

  </AppLayout>
</template>
