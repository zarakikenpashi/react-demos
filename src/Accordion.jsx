import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

const Accordion = () => {
    const datas = [
        {
            titre: "IA Générative",
            description: "L’IA générative crée du contenu original, comme des images, du texte ou du son, en s’appuyant sur des modèles d’apprentissage profond. Elle est utilisée dans la création artistique, la rédaction automatique et le développement de médias interactifs."
        },
        {
            titre: "IA Réactive",
            description: "Ce type d’IA ne possède pas de mémoire et réagit uniquement aux stimuli présents. Elle excelle dans des tâches spécifiques, comme les jeux d’échecs ou la reconnaissance d’images, mais ne peut pas apprendre de l’expérience passée."
        },
        {
            titre: "IA à Mémoire Limitée",
            description: "Contrairement à l’IA réactive, cette IA peut utiliser des données passées pour améliorer ses décisions. Elle est couramment utilisée dans les voitures autonomes et les assistants vocaux, qui analysent des informations en temps réel pour affiner leurs réponses."
        },
        {
            titre: "IA Théorique (Auto-consciente)",
            description: "Encore au stade conceptuel, cette IA aurait conscience d’elle-même et pourrait comprendre ses émotions ainsi que celles des humains. Elle représenterait une avancée majeure, mais pose des défis éthiques et technologiques."
        }
    ]
  return (
    <div className="text-white w-96">
        <h1 className="font-bold text-lg py-4">Les différents types d’Intelligence Artificielle</h1>
        {
            datas.map((data,index) => (
                <AccordionItem  data={data} key={index} />
            ) )
        }
    </div>
  )
}
const AccordionItem = ({data}) => {
    const [open, setOpen] = useState(false)
    return (
        <section>
            <button
                className="flex justify-between  cursor-pointer w-full border-b-1 border-stone-500 py-3"
                onClick={()=>setOpen(!open)}
            >
                <p>{data.titre}</p>
                { open ? <ChevronUp /> :  <ChevronDown />}
            </button>
            <div className={`py-3 ${open ? 'block' : 'hidden'}`}>
                {data.description}
            </div>
            
            
        </section>
      )
}

export default Accordion