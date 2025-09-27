import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-13rem)] py-12 px-4">
      <Card className="mx-auto max-w-sm w-full border-border/60 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-headline text-center">Login</CardTitle>
          <CardDescription className="text-center">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="text-base"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline text-muted-foreground hover:text-primary"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required className="text-base" />
            </div>
            <Button type="submit" className="w-full h-11 text-base bg-primary hover:bg-primary/90 text-primary-foreground">
              Login
            </Button>
            <Button variant="outline" className="w-full h-11 text-base">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="underline text-primary hover:text-accent">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
