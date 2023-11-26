import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const tabs = [
  {
    label: "Account",
    value: "account",
  },
  {
    label: "Password",
    value: "password",
  },
  {
    label: "Notifications",
    value: "notifications",
  },
  {
    label: "Billing",
    value: "billing",
  },
  {
    label: "Plan",
    value: "plan",
  },
]

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-fit">
      <TabsList className="flex">
        {
          tabs.map((tab: any, index: number) => (
            <TabsTrigger value={tab.value} key={index}>
              <div className="text-center">{tab.label}</div>
            </TabsTrigger>
          ))
        }
      </TabsList >

      {
        tabs.map((tab: any, index: number) => (
          <TabsContent value={tab.value} key={index}>
            <div>
              <h1 className="text-2xl font-bold text-center">{tab.label}</h1>
            </div>
          </TabsContent>
        ))
      }

    </Tabs >
  )
}
