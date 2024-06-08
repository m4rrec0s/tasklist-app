const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const description =
  "Este exercício ajuda a melhorar a sua saúde e bem-estar geral. É recomendado realizar este exercício regularmente para obter melhores resultados.";

const categories = [{ name: "Superiores" }, { name: "Inferiores" }];

const subCategories = [
  { name: "shoulders", category: "Superiores" },
  { name: "abdomen", category: "Superiores" },
  { name: "back", category: "Superiores" },
  { name: "biceps", category: "Superiores" },
  { name: "triceps", category: "Superiores" },
  { name: "breastplate", category: "Superiores" },
  { name: "quadriceps", category: "Inferiores" },
  { name: "glute", category: "Inferiores" },
  { name: "calf", category: "Inferiores" },
  { name: "posterior", category: "Inferiores" },
];

const exercises = [
  {
    name: "Encolhimento de Ombros",
    description: description,
    image: "https://utfs.io/f/cddf817b-bd30-450a-a443-8f6692ec634e-t6tsk7.jpg",
    duration: 60,
    rest: 30,
    sets: 3,
    reps: 15,
    subCategory: "shoulders", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Desenvolvimento Arnold",
    description: description,
    image: "https://utfs.io/f/dfbac103-395e-4bf0-a7a0-74861f179798-bifbyp.png",
    duration: 60,
    rest: 30,
    sets: 3,
    reps: 15,
    subCategory: "shoulders", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Elevação Lateral",
    description: description,
    image: "https://utfs.io/f/f2083af1-4522-4540-b918-32a7384b7c88-w5zpny.png",
    duration: 60,
    rest: 15,
    sets: 3,
    reps: 15,
    subCategory: "shoulders", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Desenvolvimento com Halteres",
    description: description,
    image: "https://utfs.io/f/28e35ef7-33a5-40cd-a113-08ab60a9060a-vu2hvz.jpeg",
    duration: 60,
    rest: 30,
    sets: 4,
    reps: 12,
    subCategory: "shoulders", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Elevação Frontal",
    description: description,
    image: "https://utfs.io/f/a8517605-1951-4818-8320-863d01521e74-tt131r.jpg",
    duration: 60,
    rest: 30,
    sets: 4,
    reps: 12,
    subCategory: "shoulders", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Crucifixo",
    description: description,
    image: "https://utfs.io/f/f9215dae-a952-4669-924e-cb28dcadab08-wfbufa.png ",
    duration: 60,
    rest: 30,
    sets: 3,
    reps: 15,
    subCategory: "breastplate", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Supino Reto",
    description: description,
    image: "https://utfs.io/f/3082ce57-6e82-4b5a-b364-a1aad742a3da-yku6gv.png",
    duration: 60,
    rest: 30,
    sets: 4,
    reps: 12,
    subCategory: "breastplate", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Supino Inclinado",
    description: description,
    image: "https://utfs.io/f/9598fc9a-78e6-4c60-8a42-f80047e7f992-z9q9m0.png",
    duration: 60,
    rest: 30,
    sets: 4,
    reps: 12,
    subCategory: "breastplate", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Supino Declinado",
    description: description,
    image: "https://utfs.io/f/cafae1f5-9725-4f18-bb15-ea03d7048f54-3n7u0k.png",
    duration: 60,
    rest: 30,
    sets: 4,
    reps: 12,
    subCategory: "breastplate", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Crucifixo Maquina",
    description: description,
    image: "https://utfs.io/f/0b4606ec-86fb-4be0-a624-6b66e1cdd040-b0668a.png",
    duration: 60,
    rest: 30,
    sets: 3,
    reps: 15,
    subCategory: "breastplate", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Prancha",
    description: description,
    image: "https://utfs.io/f/5432d96e-aa16-4c7a-90dc-c6f3484feb6c-x782l4.png",
    duration: 60,
    rest: 30,
    sets: 3,
    reps: 0,
    subCategory: "abdomen", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Abdominal Biscicleta",
    description: description,
    image: "https://utfs.io/f/3fcdb820-c459-41b9-98d6-b7239d8e5878-ajzbk0.jpg",
    duration: 60,
    rest: 30,
    sets: 3,
    reps: 0,
    subCategory: "abdomen", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Abdominal Invertido",
    description: description,
    image: "https://utfs.io/f/668f99f2-8efe-4a95-9260-c81c4af601aa-bk89ni.png",
    duration: 60,
    rest: 30,
    sets: 3,
    reps: 12,
    subCategory: "abdomen", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Abdominal Crunch",
    description: description,
    image: "https://utfs.io/f/eb628138-aaef-48b2-ab4c-20570a7b0319-srr9yh.png",
    duration: 60,
    rest: 30,
    sets: 3,
    reps: 12,
    subCategory: "abdomen", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Abdominal Bola",
    description: description,
    image: "https://utfs.io/f/32c88914-8d20-490f-9370-90071d4e298b-w9rt9a.jpg",
    duration: 60,
    rest: 30,
    sets: 3,
    reps: 15,
    subCategory: "abdomen", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Barra Fixa",
    description: description,
    image: "https://utfs.io/f/7397cc6c-0667-469c-8cb2-8be192a93bda-bxtnbr.png",
    duration: 50,
    rest: 30,
    sets: 3,
    reps: 15,
    subCategory: "back", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Remada Baixa",
    description: description,
    image: "https://utfs.io/f/0463bcad-dce6-4193-8057-20ba466a24f7-aeof7n.png",
    duration: 60,
    rest: 30,
    sets: 3,
    reps: 15,
    subCategory: "back", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Pullover",
    description: description,
    image: "https://utfs.io/f/954eace3-e4b6-48b3-893c-fd9a7311b004-r78cl5.png",
    duration: 60,
    rest: 30,
    sets: 3,
    reps: 15,
    subCategory: "triceps", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Remada Unilateral com Halteres",
    description: description,
    image: "https://utfs.io/f/c9946f57-7fef-49aa-ada5-3447cebac121-ens2s7.png",
    duration: 60,
    rest: 30,
    sets: 3,
    reps: 15,
    subCategory: "back", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Remada Curvada",
    description: description,
    image: "https://utfs.io/f/447959f1-b308-4fe6-8b3d-acf99ccd2a44-oiqe75.png",
    duration: 60,
    rest: 30,
    sets: 3,
    reps: 15,
    subCategory: "back", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Rosca Concentrada",
    description: description,
    image: "https://utfs.io/f/99dc74f6-c212-4fab-b256-1e3caa8e219c-chj0xp.png",
    duration: 60,
    rest: 30,
    sets: 3,
    reps: 15,
    subCategory: "biceps", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Rosca Martelo",
    description: description,
    image: "https://utfs.io/f/7244aa65-df28-496b-be8e-80051cbed004-wq24nb.png",
    duration: 60,
    rest: 30,
    sets: 3,
    reps: 15,
    subCategory: "biceps", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Rosca Scott",
    description: description,
    image: "https://utfs.io/f/a8260b1e-361c-431b-a538-b41f5e0fe228-hkbh6i.png",
    duration: 60,
    rest: 30,
    sets: 3,
    reps: 15,
    subCategory: "biceps", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Rosca Inversa",
    description: description,
    image: "https://utfs.io/f/7c8d63bb-4a57-44c7-af5e-a7729d6700c2-e7092l.png",
    duration: 60,
    rest: 30,
    sets: 3,
    reps: 15,
    subCategory: "biceps", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Rosca Direta",
    description: description,
    image: "https://utfs.io/f/35927675-c467-4135-87d1-91447e876c90-t6an1a.png",
    duration: 60,
    rest: 30,
    sets: 3,
    reps: 15,
    subCategory: "biceps", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Tríceps Testa",
    description: description,
    image: "https://utfs.io/f/b1f5f621-4179-4e80-9c12-7a9499c40375-hzoh5e.png",
    duration: 60,
    rest: 30,
    sets: 3,
    reps: 15,
    subCategory: "triceps", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Tríceps Frances",
    description: description,
    image: "https://utfs.io/f/8e1cd37a-06ea-48a6-8035-b0c87700e2c3-tu2ug6.jpeg",
    duration: 60,
    rest: 30,
    sets: 3,
    reps: 15,
    subCategory: "triceps", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Tríceps Corda",
    description: description,
    image: "https://utfs.io/f/d641b477-5ddc-42e7-a25a-1dd2cf165a36-1me0ui.jpg",
    duration: 60,
    rest: 30,
    sets: 4,
    reps: 12,
    subCategory: "triceps", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Mergulho em Paralelas",
    description: description,
    image: "https://utfs.io/f/997eb453-5331-448c-aa3f-8b0174cd0ddb-wyrg2m.png",
    duration: 90,
    rest: 30,
    sets: 4,
    reps: 10,
    subCategory: "triceps", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Kikback com Halteres",
    description: description,
    image: "https://utfs.io/f/d357dedc-3ea4-46ae-b651-5aea98b657ac-lyhbxk.jpg",
    duration: 60,
    rest: 30,
    sets: 3,
    reps: 15,
    subCategory: "triceps", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Glúteo Maquina",
    description: description,
    image: "https://utfs.io/f/eb900c2e-a704-4ae7-9232-f47a7b741ffd-foqibk.png",
    duration: 60,
    rest: 30,
    sets: 4,
    reps: 15,
    subCategory: "glute", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Afundo",
    description: description,
    image: "https://utfs.io/f/412081ca-b8d3-4c43-bee4-b06d48c52d50-nhinp3.png",
    duration: 300,
    rest: 50,
    sets: 3,
    reps: 0,
    subCategory: "glute", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Ponte com Elevação de Perna",
    description: description,
    image: "https://utfs.io/f/97bdecd4-e834-44bd-bde4-88092843baf7-3z98as.jpg",
    duration: 60,
    rest: 30,
    sets: 3,
    reps: 15,
    subCategory: "glute", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Agachamento Sumô",
    description: description,
    image: "https://utfs.io/f/9401f3fa-5fc9-404e-b861-6646653ce4b4-ao9d33.jpeg",
    duration: 90,
    rest: 30,
    sets: 4,
    reps: 15,
    subCategory: "glute", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Elevação Pelvica",
    description: description,
    image: "https://utfs.io/f/216606af-1790-448a-be9d-d1aeff7047ea-thob7p.png",
    duration: 90,
    rest: 8,
    sets: 3,
    reps: 10,
    subCategory: "glute", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Agachamento Livre",
    description: description,
    image: "https://utfs.io/f/bb2f7b22-17ec-4098-8aca-ea047d913e84-hrr5kf.png",
    duration: 60,
    rest: 30,
    sets: 3,
    reps: 15,
    subCategory: "quadriceps", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Cadeira Extensora",
    description: description,
    image: "https://utfs.io/f/46aa70ed-d413-4e63-aca7-8a0fb2f36791-ofr3dt.png",
    duration: 60,
    rest: 30,
    sets: 3,
    reps: 15,
    subCategory: "quadriceps", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Leg Press",
    description: description,
    image: "https://utfs.io/f/5dfe6b14-ec4f-41f1-9559-86a50c5b8a88-s8yrng.png",
    duration: 60,
    rest: 30,
    sets: 3,
    reps: 15,
    subCategory: "quadriceps", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Agachamento Hack",
    description: description,
    image: "https://utfs.io/f/09023711-b771-471e-ae09-0a051682e340-aogt0i.jpg",
    duration: 60,
    rest: 30,
    sets: 3,
    reps: 15,
    subCategory: "quadriceps", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Agachamento Smith",
    description: description,
    image: "https://utfs.io/f/ab250ee1-605d-4b34-bc85-ef526dc09f5b-o9ctk6.png",
    duration: 60,
    rest: 30,
    sets: 3,
    reps: 15,
    subCategory: "quadriceps", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Stiff",
    description: description,
    image: "https://utfs.io/f/d962efa5-96af-40b8-b00f-bd00eb0e944e-1tcn3c.jpeg",
    duration: 60,
    rest: 30,
    sets: 3,
    reps: 15,
    subCategory: "posterior", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Mesa Flexora",
    description: description,
    image: "https://utfs.io/f/1cdd7bc6-9f74-49c5-874e-fedd2e8f46a3-49qpqu.png",
    duration: 50,
    rest: 25,
    sets: 3,
    reps: 15,
    subCategory: "posterior", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Levantamento Terra",
    description: description,
    image: "https://utfs.io/f/9a834300-a130-4e3f-ae82-9db6aae539bc-q40chv.png",
    duration: 80,
    rest: 30,
    sets: 3,
    reps: 12,
    subCategory: "posterior", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Cadeira Flexora",
    description: description,
    image: "https://utfs.io/f/7a50bb42-53a5-4d0c-922b-83311d39d5b7-oz5wj3.png",
    duration: 60,
    rest: 30,
    sets: 3,
    reps: 15,
    subCategory: "posterior", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Stiff unilateral",
    description: description,
    image: "https://utfs.io/f/9e1257d2-6033-41c7-8005-a226c8229980-6h6vck.jpg",
    duration: 90,
    rest: 30,
    sets: 3,
    reps: 15,
    subCategory: "posterior", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Panturrilha Sentado",
    description: description,
    image: "https://utfs.io/f/fcc28a3a-578b-49b5-9ea8-a73088956530-uvx96j.jpg",
    duration: 60,
    rest: 30,
    sets: 4,
    reps: 15,
    subCategory: "calf", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Panturrilha em Pé",
    description: description,
    image: "https://utfs.io/f/9ba14b27-f0b1-4728-92b8-3790b505bab4-giu6ah.png",
    duration: 60,
    rest: 30,
    sets: 3,
    reps: 20,
    subCategory: "calf", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Panturrilha no Hack",
    description: description,
    image: "https://utfs.io/f/31034b1b-bff8-4539-b33e-667087be3b1c-hsrbpw.jpg",
    duration: 60,
    rest: 30,
    sets: 4,
    reps: 15,
    subCategory: "calf", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Panturrilha na Leg Press",
    description: description,
    image: "https://utfs.io/f/9f91ad25-7c24-4a44-9eb0-3b57bcf198df-ps18sb.png",
    duration: 60,
    rest: 30,
    sets: 4,
    reps: 15,
    subCategory: "calf", // TODO: Adicionar as sub-categoria referente
  },
  {
    name: "Panturrilha no Smith",
    description: description,
    image: "https://utfs.io/f/1d334a03-1f92-4d70-909f-92a82cad089d-gb3te8.jpg",
    duration: 60,
    rest: 30,
    sets: 3,
    reps: 20,
    subCategory: "calf", // TODO: Adicionar as sub-categoria referente
  },
];

const workouts = [
  {
    name: "Treino A: Peito e Tríceps",
    description: "Treino focado no peito e tríceps.",
    image: "https://utfs.io/f/2a468b07-32a9-4e37-b6ed-ff57fa9a943a-mzy9k5.png",
    exercises: [
      { name: "Supino Reto" },
      { name: "Supino Inclinado" },
      { name: "Supino Declinado" },
      { name: "Crucifixo" },
      { name: "Crucifixo Máquina" },
      { name: "Desenvolvimento com Halteres" },
      { name: "Tríceps Testa" },
      { name: "Tríceps Frances" },
      { name: "Prancha" },
    ],
  },
  {
    name: "Treino B: Costas e Bíceps",
    description: "Treino focado nas costas e bíceps.",
    image: "https://utfs.io/f/daf43761-886a-4263-a086-5a94dbaf857a-mzy9k6.png",
    exercises: [
      { name: "Barra Fixa" },
      { name: "Remada Baixa" },
      { name: "Remada Unilateral com Halteres" },
      { name: "Remada Curvada" },
      { name: "Rosca Direta" },
      { name: "Rosca Concentrada" },
      { name: "Rosca Martelo" },
      { name: "Rosca Scott" },
      { name: "Prancha" },
    ],
  },
  {
    name: "Treino C: Pernas",
    description: "Treino focado nas pernas.",
    image: "https://utfs.io/f/5fcfbc01-9b32-4da6-893a-7707a84e42e1-mzy9k7.png",
    exercises: [
      { name: "Agachamento Livre" },
      { name: "Cadeira Extensora" },
      { name: "Leg Press" },
      { name: "Agachamento Hack" },
      { name: "Agachamento Smith" },
      { name: "Stiff" },
      { name: "Mesa Flexora" },
      { name: "Levantamento Terra" },
      { name: "Panturrilha Sentado" },
      { name: "Panturrilha em Pé" },
    ],
  },
  {
    name: "Treino D: Ombros e Core",
    description: "Treino focado nos ombros e core.",
    image: "https://utfs.io/f/4fff6b5c-2ae2-4a7a-a06d-753a9bb2b39f-mzy9k8.png",
    exercises: [
      { name: "Elevação Lateral" },
      { name: "Desenvolvimento Arnold" },
      { name: "Levantamento Frontal" },
      { name: "Barra Fixa Pronada" },
      { name: "Abdominal Biscicleta" },
      { name: "Ponte com Elevação de Perna" },
      { name: "Agachamento Sumô" },
      { name: "Elevação Pélvica" },
    ],
  },
];

const createWorkouts = async () => {
  for (const workout of workouts) {
    const exercises = await Promise.all(
      workout.exercises.map((exercise) =>
        prisma.exercise.findFirst({ where: { name: exercise.name } })
      )
    );

    const exerciseIds = exercises
      .filter((exercise) => exercise !== null)
      .map((exercise) => exercise.id);

    await prisma.workout.create({
      data: {
        name: workout.name,
        description: workout.description,
        image: workout.image,
        exercises: {
          connect: exerciseIds.map((id) => ({ id })),
        },
      },
    });
    console.log(`Treino: ${workout.name} foi adicionado!`);
  }
};

const createCategories = async () => {
  for await (const { name } of categories) {
    await prisma.category.create({ data: { name } });
    console.log(`Categoria: ${name} foi adicionado!`);
  }
};

const createSubCategories = async () => {
  for await (const { name, category: categoryName } of subCategories) {
    const category = await prisma.category.findFirst({
      where: {
        name: categoryName,
      },
    });

    if (!category) {
      console.warn(`Categoria: ${categoryName} não foi encontrado!`);
      continue;
    }

    await prisma.subcategory.create({
      data: {
        name,
        categoryId: category.id,
      },
    });
    console.log(`Sub-categoria: ${name} foi adicionado!`);
  }
};

const createExercises = async () => {
  for await (const { subCategory: subCategoryName, ...data } of exercises) {
    const subCategory = await prisma.subcategory.findFirst({
      where: { name: subCategoryName },
    });

    if (!subCategory) {
      console.warn(`Sub-categoria: ${subCategoryName} não foi encontrado!`);
      continue;
    }

    await prisma.exercise.create({
      data: { ...data, subcategoryId: subCategory.id },
    });
    console.log(`Exercício: ${data.name} foi adicionado!`);
  }
};

const main = async () => {
  await createCategories();
  await createSubCategories();
  await createExercises();
  await createWorkouts();
};

main()
  .then(async () => {
    console.log("População feito com sucesso!");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });