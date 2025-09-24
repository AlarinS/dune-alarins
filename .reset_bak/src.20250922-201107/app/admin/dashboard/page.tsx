"use client";
import Header from "@/components/Header";
import { Card, Metric, Text, Flex, ProgressBar, Table, TableHead, TableHeaderCell, TableBody, TableRow, TableCell } from "@tremor/react";
const kpis = [
  { title: "Items", value: 1234, progress: 64 },
  { title: "NPCs",  value: 87,   progress: 48 },
  { title: "Skills",value: 312,  progress: 72 },
];
const recent = [
  { id:1, name:"Crysknife",    type:"item",  level:12 },
  { id:2, name:"Fremen Scout", type:"npc",   level:6  },
  { id:3, name:"Sandwalk",     type:"skill", level:3  },
];
export default function Page(){
  return (<>
    <Header title="Dashboard"/>
    <div className="p-4 grid gap-4 md:grid-cols-3">
      {kpis.map(k=>(
        <Card key={k.title} className="td-card">
          <Text className="td-muted">{k.title}</Text>
          <Metric>{k.value}</Metric>
          <Flex className="mt-2"><Text className="td-muted">{k.progress}%</Text></Flex>
          <ProgressBar value={k.progress} className="mt-2"/>
        </Card>
      ))}
    </div>
    <div className="p-4">
      <Card className="td-card">
        <Text className="mb-2 td-muted">Recent</Text>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>ID</TableHeaderCell>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Type</TableHeaderCell>
              <TableHeaderCell>Level</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recent.map(r=>(
              <TableRow key={r.id}>
                <TableCell>{r.id}</TableCell>
                <TableCell>{r.name}</TableCell>
                <TableCell>{r.type}</TableCell>
                <TableCell>{r.level}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  </>);
}
