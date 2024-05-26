const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const description =
  "Este exercício ajuda a melhorar a sua saúde e bem-estar geral. É recomendado realizar este exercício regularmente para obter melhores resultados.";

async function main() {
  const categories = [
    {
      name: "Superiores",
      subcategories: [
        {
          name: "ombros",
          exercises: [
            {
              name: "Encolhimento de Ombros",
              description: description,
              image:
                "https://utfs.io/f/cddf817b-bd30-450a-a443-8f6692ec634e-t6tsk7.jpg",
              duration: 60,
              rest: 30,
              sets: 3,
              reps: 15,
            },
            {
              name: "Desenvolvimento Arnold",
              description: description,
              image:
                "https://utfs.io/f/dfbac103-395e-4bf0-a7a0-74861f179798-bifbyp.png",
              duration: 60,
              rest: 30,
              sets: 3,
              reps: 15,
            },
            {
              name: "Elevação Lateral",
              description: description,
              image:
                "https://utfs.io/f/f2083af1-4522-4540-b918-32a7384b7c88-w5zpny.png",
              duration: 60,
              rest: 15,
              sets: 3,
              reps: 15,
            },
            {
              name: "Desenvolvimento com Halteres",
              description: description,
              image:
                "https://utfs.io/f/28e35ef7-33a5-40cd-a113-08ab60a9060a-vu2hvz.jpeg",
              duration: 60,
              rest: 30,
              sets: 4,
              reps: 12,
            },
            {
              name: "Elevação Frontal",
              description: description,
              image:
                "https://utfs.io/f/a8517605-1951-4818-8320-863d01521e74-tt131r.jpg",
              duration: 60,
              rest: 30,
              sets: 4,
              reps: 12,
            },
          ],
        },
        {
          name: "breastplate",
          exercises: [
            {
              name: "Crucifixo",
              description: description,
              image:
                "https://utfs.io/f/f9215dae-a952-4669-924e-cb28dcadab08-wfbufa.png ",
              duration: 60,
              rest: 30,
              sets: 3,
              reps: 15,
            },
            {
              name: "Supino Reto",
              description: description,
              image:
                "https://utfs.io/f/3082ce57-6e82-4b5a-b364-a1aad742a3da-yku6gv.png",
              duration: 60,
              rest: 30,
              sets: 4,
              reps: 12,
            },
            {
              name: "Supino Inclinado",
              description: description,
              image:
                "https://utfs.io/f/9598fc9a-78e6-4c60-8a42-f80047e7f992-z9q9m0.png",
              duration: 60,
              rest: 30,
              sets: 4,
              reps: 12,
            },
            {
              name: "Supino Declinado",
              description: description,
              image:
                "https://utfs.io/f/cafae1f5-9725-4f18-bb15-ea03d7048f54-3n7u0k.png",
              duration: 60,
              rest: 30,
              sets: 4,
              reps: 12,
            },
            {
              name: "Crucifixo Maquina",
              description: description,
              image:
                "https://utfs.io/f/0b4606ec-86fb-4be0-a624-6b66e1cdd040-b0668a.png",
              duration: 60,
              rest: 30,
              sets: 3,
              reps: 15,
            },
          ],
        },
        {
          name: "abdomen",
          exercises: [
            {
              name: "Prancha",
              description: description,
              image:
                "https://utfs.io/f/5432d96e-aa16-4c7a-90dc-c6f3484feb6c-x782l4.png",
              duration: 60,
              rest: 30,
              sets: 3,
              reps: 0,
            },
            {
              name: "Abdominal Biscicleta",
              description: description,
              image:
                "https://utfs.io/f/3fcdb820-c459-41b9-98d6-b7239d8e5878-ajzbk0.jpg",
              duration: 60,
              rest: 30,
              sets: 3,
              reps: 0,
            },
            {
              name: "Abdominal Invertido",
              description: description,
              image:
                "https://utfs.io/f/668f99f2-8efe-4a95-9260-c81c4af601aa-bk89ni.png",
              duration: 60,
              rest: 30,
              sets: 3,
              reps: 12,
            },
            {
              name: "Abdominal Crunch",
              description: description,
              image:
                "https://utfs.io/f/eb628138-aaef-48b2-ab4c-20570a7b0319-srr9yh.png",
              duration: 60,
              rest: 30,
              sets: 3,
              reps: 12,
            },
            {
              name: "Abdominal Bola",
              description: description,
              image:
                "https://utfs.io/f/32c88914-8d20-490f-9370-90071d4e298b-w9rt9a.jpg",
              duration: 60,
              rest: 30,
              sets: 3,
              reps: 15,
            },
          ],
        },
        {
          name: "back",
          exercises: [
            {
              name: "Barra Fixa",
              description: description,
              image:
                "https://utfs.io/f/7397cc6c-0667-469c-8cb2-8be192a93bda-bxtnbr.png",
              duration: 50,
              rest: 30,
              sets: 3,
              reps: 15,
            },
            {
              name: "Remada Baixa",
              description: description,
              image:
                "https://utfs.io/f/0463bcad-dce6-4193-8057-20ba466a24f7-aeof7n.png",
              duration: 60,
              rest: 30,
              sets: 3,
              reps: 15,
            },
            {
              name: "Pullover",
              description: description,
              image:
                "https://utfs.io/f/954eace3-e4b6-48b3-893c-fd9a7311b004-r78cl5.png",
              duration: 60,
              rest: 30,
              sets: 3,
              reps: 15,
            },
            {
              name: "Remada Unilateral com Halteres",
              description: description,
              image:
                "https://utfs.io/f/c9946f57-7fef-49aa-ada5-3447cebac121-ens2s7.png",
              duration: 60,
              rest: 30,
              sets: 3,
              reps: 15,
            },
            {
              name: "Remada Curvada",
              description: description,
              image:
                "https://utfs.io/f/447959f1-b308-4fe6-8b3d-acf99ccd2a44-oiqe75.png",
              duration: 60,
              rest: 30,
              sets: 3,
              reps: 15,
            },
          ],
        },
        {
          name: "biceps",
          exercises: [
            {
              name: "Rosca Concentrada",
              description: description,
              image:
                "https://utfs.io/f/99dc74f6-c212-4fab-b256-1e3caa8e219c-chj0xp.png",
              duration: 60,
              rest: 30,
              sets: 3,
              reps: 15,
            },
            {
              name: "Rosca Martelo",
              description: description,
              image:
                "https://utfs.io/f/7244aa65-df28-496b-be8e-80051cbed004-wq24nb.png",
              duration: 60,
              rest: 30,
              sets: 3,
              reps: 15,
            },
            {
              name: "Rosca Scott",
              description: description,
              image:
                "https://utfs.io/f/a8260b1e-361c-431b-a538-b41f5e0fe228-hkbh6i.png",
              duration: 60,
              rest: 30,
              sets: 3,
              reps: 15,
            },
            {
              name: "Rosca Inversa",
              description: description,
              image:
                "https://utfs.io/f/7c8d63bb-4a57-44c7-af5e-a7729d6700c2-e7092l.png",
              duration: 60,
              rest: 30,
              sets: 3,
              reps: 15,
            },
            {
              name: "Rosca Direta",
              description: description,
              image:
                "https://utfs.io/f/35927675-c467-4135-87d1-91447e876c90-t6an1a.png",
              duration: 60,
              rest: 30,
              sets: 3,
              reps: 15,
            },
          ],
        },
        {
          name: "triceps",
          exercises: [
            {
              name: "Tríceps Testa",
              description: description,
              image:
                "https://utfs.io/f/b1f5f621-4179-4e80-9c12-7a9499c40375-hzoh5e.png",
              duration: 60,
              rest: 30,
              sets: 3,
              reps: 15,
            },
            {
              name: "Tríceps Frances",
              description: description,
              image:
                "https://utfs.io/f/8e1cd37a-06ea-48a6-8035-b0c87700e2c3-tu2ug6.jpeg",
              duration: 60,
              rest: 30,
              sets: 3,
              reps: 15,
            },
            {
              name: "Tríceps Corda",
              description: description,
              image:
                "https://utfs.io/f/d641b477-5ddc-42e7-a25a-1dd2cf165a36-1me0ui.jpg",
              duration: 60,
              rest: 30,
              sets: 4,
              reps: 12,
            },
            {
              name: "Mergulho em Paralelas",
              description: description,
              image:
                "https://utfs.io/f/997eb453-5331-448c-aa3f-8b0174cd0ddb-wyrg2m.png",
              duration: 90,
              rest: 30,
              sets: 4,
              reps: 10,
            },
            {
              name: "Kikback com Halteres",
              description: description,
              image:
                "https://utfs.io/f/d357dedc-3ea4-46ae-b651-5aea98b657ac-lyhbxk.jpg",
              duration: 60,
              rest: 30,
              sets: 3,
              reps: 15,
            },
          ],
        },
      ],
    },
    {
      name: "Inferiores",
      subcategories: [
        {
          name: "glute",
          exercises: [
            {
              name: "Glúteo Maquina",
              description: description,
              image:
                "https://utfs.io/f/eb900c2e-a704-4ae7-9232-f47a7b741ffd-foqibk.png",
              duration: 60,
              rest: 30,
              sets: 4,
              reps: 15,
            },
            {
              name: "Afundo",
              description: description,
              image:
                "https://utfs.io/f/412081ca-b8d3-4c43-bee4-b06d48c52d50-nhinp3.png",
              duration: 300,
              rest: 50,
              sets: 3,
              reps: 0,
            },
            {
              name: "Ponte com Elevação de Perna",
              description: description,
              image:
                "https://utfs.io/f/97bdecd4-e834-44bd-bde4-88092843baf7-3z98as.jpg",
              duration: 60,
              rest: 30,
              sets: 3,
              reps: 15,
            },
            {
              name: "Agachamento Sumô",
              description: description,
              image:
                "https://utfs.io/f/9401f3fa-5fc9-404e-b861-6646653ce4b4-ao9d33.jpeg",
              duration: 90,
              rest: 30,
              sets: 4,
              reps: 15,
            },
            {
              name: "Elevação Pelvica",
              description: description,
              image:
                "https://utfs.io/f/216606af-1790-448a-be9d-d1aeff7047ea-thob7p.png",
              duration: 90,
              rest: 8,
              sets: 3,
              reps: 10,
            },
          ],
        },
        {
          name: "quadriceps",
          exercises: [
            {
              name: "Agachamento Livre",
              description: description,
              image:
                "https://utfs.io/f/bb2f7b22-17ec-4098-8aca-ea047d913e84-hrr5kf.png",
              duration: 60,
              rest: 30,
              sets: 3,
              reps: 15,
            },
            {
              name: "Cadeira Extensora",
              description: description,
              image:
                "https://utfs.io/f/46aa70ed-d413-4e63-aca7-8a0fb2f36791-ofr3dt.png",
              duration: 60,
              rest: 30,
              sets: 3,
              reps: 15,
            },
            {
              name: "Leg Press",
              description: description,
              image:
                "https://utfs.io/f/5dfe6b14-ec4f-41f1-9559-86a50c5b8a88-s8yrng.png",
              duration: 60,
              rest: 30,
              sets: 3,
              reps: 15,
            },
            {
              name: "Agachamento Hack",
              description: description,
              image:
                "https://utfs.io/f/09023711-b771-471e-ae09-0a051682e340-aogt0i.jpg",
              duration: 60,
              rest: 30,
              sets: 3,
              reps: 15,
            },
            {
              name: "Agachamento Smith",
              description: description,
              image:
                "https://utfs.io/f/ab250ee1-605d-4b34-bc85-ef526dc09f5b-o9ctk6.png",
              duration: 60,
              rest: 30,
              sets: 3,
              reps: 15,
            },
          ],
        },
        {
          name: "posterior",
          exercises: [
            {
              name: "Stiff",
              description: description,
              image:
                "https://utfs.io/f/6b4d1a0b-7f5b-4a4b-9b7e-6a4f4b5c5b2e-7j7v9a.png",
              duration: 60,
              rest: 30,
              sets: 3,
              reps: 15,
            },
            {
              name: "Mesa Flexora",
              description: description,
              image:
                "https://utfs.io/f/1cdd7bc6-9f74-49c5-874e-fedd2e8f46a3-49qpqu.png",
              duration: 50,
              rest: 25,
              sets: 3,
              reps: 15,
            },
            {
              name: "Levantamento Terra",
              description: description,
              image:
                "https://utfs.io/f/9a834300-a130-4e3f-ae82-9db6aae539bc-q40chv.png",
              duration: 80,
              rest: 30,
              sets: 3,
              reps: 12,
            },
            {
              name: "Cadeira Flexora",
              description: description,
              image:
                "https://utfs.io/f/7a50bb42-53a5-4d0c-922b-83311d39d5b7-oz5wj3.png",
              duration: 60,
              rest: 30,
              sets: 3,
              reps: 15,
            },
            {
              name: "Stiff unilateral",
              description: description,
              image:
                "https://utfs.io/f/9e1257d2-6033-41c7-8005-a226c8229980-6h6vck.jpg",
              duration: 90,
              rest: 30,
              sets: 3,
              reps: 15,
            },
          ],

        },
        {
          name: "calf",
          exercises: [
            {
              name: "Panturrilha Sentado",
              description: description,
              image:
                "https://utfs.io/f/fcc28a3a-578b-49b5-9ea8-a73088956530-uvx96j.jpg",
              duration: 60,
              rest: 30,
              sets: 4,
              reps: 15,
            },
            {
              name: "Panturrilha em Pé",
              description: description,
              image:
                "https://utfs.io/f/9ba14b27-f0b1-4728-92b8-3790b505bab4-giu6ah.png",
              duration: 60,
              rest: 30,
              sets: 3,
              reps: 20,
            },
            {
              name: "Panturrilha no Hack",
              description: description,
              image:
                "https://utfs.io/f/31034b1b-bff8-4539-b33e-667087be3b1c-hsrbpw.jpg",
              duration: 60,
              rest: 30,
              sets: 4,
              reps: 15,
            },
            {
              name: "Panturrilha na Leg Press",
              description: description,
              image:
                "https://utfs.io/f/9f91ad25-7c24-4a44-9eb0-3b57bcf198df-ps18sb.png",
              duration: 60,
              rest: 30,
              sets: 4,
              reps: 15,
            },
            {
              name: "Panturrilha no Smith",
              description: description,
              image:
                "https://utfs.io/f/1d334a03-1f92-4d70-909f-92a82cad089d-gb3te8.jpg",
              duration: 60,
              rest: 30,
              sets: 3,
              reps: 20,
            },
          ],
        },
      ],
    },
  ];

  for (const category of categories) {
    const createdCategory = await prisma.category.create({
      data: { name: category.name },
    });

    console.log(`Categoria criada: ${createdCategory.name}`);

    for (const subcategory of category.subcategories) {
      const createdSubcategory = await prisma.subcategory.create({
        data: {
          name: subcategory.name,
          categoryId: createdCategory.id,
        },
      });

      console.log(`Subcategoria criada: ${createdSubcategory.name}`);

      for (const exercise of subcategory.exercises) {
        const createdExercise = await prisma.exercise.create({
          data: {
            ...exercise,
            subcategoryId: createdSubcategory.id,
          },
        });

        console.log(`Exercício criado: ${createdExercise.name}`);
      }
    }
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
