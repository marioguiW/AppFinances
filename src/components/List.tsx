import { CircleDollarSign, CircleDollarSignIcon, HandCoinsIcon, TrashIcon } from "lucide-react"
import { IComprovante } from "../interface/IComprovante"
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./ui/table"
import { Dialog, DialogTrigger } from "./ui/dialog"


type ListProps = {
    total: string,
    comprovantes: IComprovante[],
    setComprovantes: React.Dispatch<React.SetStateAction<IComprovante[]>>
}

export default function List({ total, comprovantes, setComprovantes }: ListProps) {
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead className="w-[39rem]">Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {comprovantes.map((comprovante, i) => {

                    const formatted = new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(comprovante.value)

                    const statusFormatted = comprovante.type == "entrada" ?
                        <span className="flex items-center gap-3">
                            Entrada <CircleDollarSignIcon color="green" />
                        </span> :
                        <span className="flex items-center gap-7">
                            Saida <HandCoinsIcon color="red" />
                        </span>

                    function handleDelete(comprovante : IComprovante) {
                        setComprovantes(prev => prev.filter(comp => {
                            if(comprovante.id != comp.id){
                                return comprovante
                            }
                        })
                        )
                    }

                    return (
                        <TableRow key={comprovante.id}>
                            <TableCell className="font-medium text-left">{comprovante.description}</TableCell>
                            <TableCell className="text-left">{statusFormatted}</TableCell>
                            <TableCell className="text-right">{comprovante.type == "entrada" ? formatted : `- ${formatted}`}</TableCell>
                            <TableCell className="text-right">
                                <button onClick={() => handleDelete(comprovante)}>
                                    <TrashIcon color="red" size="20" />
                                </button>
                            </TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
            <TableRow>
                <TableCell className="font-bold">TOTAL</TableCell>
                <TableCell colSpan={3} className="text-right">{total}</TableCell>
            </TableRow>
        </Table>
    )
}
