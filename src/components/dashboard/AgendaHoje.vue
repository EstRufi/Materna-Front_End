<script setup>
import { computed } from 'vue'

    const agenda =[
        {
            id: 1,
            data: "2026-10-23",
            horario: "10:00:00",
            nome: "Maria Silva",
            tipo: "Doação de leite humano",
            status: "Confirmado"
        },
        {
            id: 2,
            data: "2026-10-24",
            horario: "11:00:00",
            nome: "Sofia Michele",
            tipo: "Orientação inicial",
            status: "Pendente"
        }
    ]

    const hoje =new Date()
    const dataHoje = [
        hoje.getFullYear(),
        String(hoje.getMonth() + 1).padStart(2, '0'),
        String(hoje.getDate()).padStart(2,'0')
    ].join('-')

    const agendaDehoje =computed(()=>{
        return agenda.filter(item => item.data === dataHoje)
    })
    
    function formatarData(data) {
        const [ano, mes, dia] = data.split('-')

        const dataFormatada = new Date(
            Number(ano),
            Number(mes) - 1,
            Number(dia)
        )

        return {
            dia,
            mes: dataFormatada.toLocaleDateString('pt-BR', {
                month: 'short'
            }).replace('.', '').toUpperCase()
        }
    }
</script>
 <template>
    <footer class="w-full  bg-white border-2 border-gray-200">
        <div>
            <h2>Agenda de hoje</h2>
            <RouterLink
                to=""
                class="">
                    Abrir agenda ↗
            </RouterLink>
        </div>
        <div>
            <div 
                v-for="item in agendaDehoje" 
                :key="item.id"
                class="">

                <div>
                    <span>
                        {{ formatarData(item.data).dia }}
                    </span>
                    <span>
                        {{ formatarData(item.data).mes }}
                    </span>
                </div>

                <div>
                    <div>
                        <div>
                            <p>{{ item.horario.slice(0, 5) }}</p>
                            <p>{{ item.nome }}</p>
                        </div>
                        <p>{{ item.tipo }}</p>
                    </div>
                    <span>
                        {{ item.status }}
                    </span>
                </div>
            </div>
        </div>
    </footer>
 </template>