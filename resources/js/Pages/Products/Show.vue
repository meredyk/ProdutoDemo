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
import TextArea from "@/Components/TextArea.vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  }
})

const form = useForm({
  id: props.product.id,
  name: props.product.name,
  description: props.product.description,
  price: props.product.price,
  category_id: props.product.category_id,
  image_url: props.product.image_url,
});

const categoryId = ref(null);

const submit = () => {
  form.transform(data => ({
    ...data
  })).put(route('products:update'), {
    onFinish: () => {},
  });
};

const deleteData = () => {
  form.transform(data => ({
    ...data
  })).delete(route('products:delete'), {
    onFinish: () => {},
  });
};

const categories = usePage().props.auth.user.categories;

</script>

<template>
  <AppLayout title="Produtos">

    <template #header>
      <div class="flex">
        <div class="flex-none">
          <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            Atualização do Produto
          </h2>
        </div>

      </div>
    </template>

    <div>
      <div class="max-w-7xl mx-auto py-4 sm:px-6 lg:px-8">
        <FormSection @submit.prevent="submit">
          <template #title>
            Produto
          </template>

          <template #description>
            Mantenha o produto atualizado com todas informações solicitadas.
          </template>
          <template #form>
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
              <p style="color: #009606">Atualizado com sucesso.</p>
            </ActionMessage>

            <PrimaryButton type="button" @click="deleteData" class="bg-red-600" style="margin-right: 10px" :disabled="form.processing">
              Deletar
            </PrimaryButton>

            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
              Atualizar
            </PrimaryButton>
          </template>
        </FormSection>
      </div>
    </div>
  </AppLayout>
</template>
