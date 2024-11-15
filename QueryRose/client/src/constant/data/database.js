import IconTables from '../../assets/table.svg'
import IconEyeglass2 from '../../assets/eyeglass-2.svg'
import IconSettings from '../../assets/settings.svg'
import IconBolt from '../../assets/bolt.svg'
import IconClockHour4 from '../../assets/clock-hour-4.svg'
import { dataTables } from './tables'
import { dataViews } from './views'
import { dataStoreProcs } from './store_procs'
import { dataTriggers } from './triggers'
import { dataEvents } from './events'

export const databaseProperties = [
    { key: "tables", nama: "Tables", icon: IconTables, data: dataTables },
    { key: "views", nama: "Views", icon: IconEyeglass2, data: dataViews },
    { key: "stored-procedure", nama: "Stored Procs", icon: IconSettings, data: dataStoreProcs },
    { key: "triggers", nama: "Triggers", icon: IconBolt, data: dataTriggers },
    { key: "events", nama: "Events", icon: IconClockHour4, data: dataEvents },
];