<script setup>
import { ref } from 'vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import ActionMessage from '@/Components/ActionMessage.vue';
import FormSection from '@/Components/FormSection.vue';
import SectionBorder from '@/Components/SectionBorder.vue';

const props = defineProps({
  category: {
    type: Object,
    required: true,
  }
})

const form = useForm({
  id: props.category.id,
  name: props.category.name,
});

const categoryId = ref(null);

const submit = () => {
  form.transform(data => ({
    ...data
  })).put(route('categories:update'), {
    onFinish: () => {
      form.reset('name');
      form.name = null;
      setTimeout(() => formOpen.value = false, 1500);
    },
  });
};

const deleteData = () => {
  form.transform(data => ({
    ...data
  })).delete(route('categories:delete'), {
    onFinish: () => {},
  });
};

const formOpen = ref(false);

</script>

<template>
  <AppLayout title="Categorias">

    <template #header>
      <div class="flex">
        <div class="flex-none">
          <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            Atualização da Categoria
          </h2>
        </div>

      </div>
    </template>

    <div>
      <div class="max-w-7xl mx-auto py-4 sm:px-6 lg:px-8">
        <FormSection @submit.prevent="submit">
          <template #title>
            Categoria selecionada: {{ category.name }}
          </template>

          <template #description>
            Total de produtos: {{ category.products }}
            <div class="mt-5">
            <p>
              <span class="text-red-500"><b>Atenção</b>:</span> Ao deletar uma categoria, todos os produtos relacionados a ela serão deletados.
            </p>
            </div>
          </template>
          <template #form>

            <input
              id="id"
              ref="categoryId"
              type="hidden"
              v-model="category.id"
            >

            <!-- Name -->
            <div class="col-span-6 sm:col-span-4">
              <InputLabel for="name" value="Novo nome" />
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
      <SectionBorder />
    </div>
  </AppLayout>
</template>
