"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


import { useState } from "react";

export function LoginForm({
    className,
    ...props
  }: React.ComponentPropsWithoutRef<"div">) {
    const [phone, setPhone] = useState("+998");
  
    return (
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Kirish</CardTitle>
            <CardDescription>
              Telegram botdan olgan login va parolingizni kiriting
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="phone">Telefon raqamingiz</Label>
                  <Input
                    id="phone"
                    type="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Parolingiz</Label>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Sizda parol yo&#39;qmi?
                    </a>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                  Kirish
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Sizda akkaunt yo&#39;qmi?{" "}
                <a href="#" className="underline underline-offset-4">
                  Ro&#39;yxatdan o&#39;tish
                </a>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
  