"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { submitApplication } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";


type ApplicationFormState = {
  message: string;
  errors: Record<string, string[]>;
};

const initialState: ApplicationFormState = {
  message: "",
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? "Submitting..." : "Submit Application"}
    </Button>
  );
}


export function ApplicationForm() {
  const [state, formAction] = useActionState<ApplicationFormState, FormData>(submitApplication, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (state.message) {
      if(Object.keys(state.errors).length > 0 || state.message.includes("error")) {
        toast({
            title: "Error",
            description: state.message,
            variant: "destructive",
        });
      } else {
        toast({
            title: "Success",
            description: state.message,
        });
      }
    }
  }, [state, toast]);

  const fields = [
      { id: "product", label: "Describe your startup’s core product or service.", type: "textarea" },
      { id: "problem", label: "What problem does your business solve?", type: "textarea" },
      { id: "customers", label: "Who are your target customers in Canada?", type: "textarea" },
      { id: "strategy", label: "Describe your go-to-market strategy.", type: "textarea" },
      { id: "traction", label: "What traction or validation have you achieved so far?", type: "textarea" },
      { id: "name", label: "Your Name", type: "text" },
      { id: "email", label: "Your Email", type: "email" },
  ];

  return (
    <Card className="bg-card border-border shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Application Form</CardTitle>
        <CardDescription>
          This application is designed to understand your business vision.
        </CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="space-y-6">
          {fields.map(field => (
            <div key={field.id} className="space-y-2">
              <Label htmlFor={field.id}>{field.label}</Label>
              {field.type === "textarea" ? (
                <Textarea id={field.id} name={field.id} placeholder="Your detailed answer..." rows={4} className="bg-background" />
              ) : (
                <Input id={field.id} name={field.id} type={field.type} placeholder={`Your ${field.label.toLowerCase()}...`} className="bg-background" />
              )}
              {state.errors?.[field.id] && (
                  <p className="text-sm text-destructive">{state.errors[field.id][0]}</p>
              )}
            </div>
          ))}
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <SubmitButton />
           <p className="text-xs text-muted-foreground text-center">
            <strong>Important Notice:</strong> NBV is not an immigration consultancy and does not provide immigration advice. All permit or PR decisions are made independently by the IRCC.
          </p>
        </CardFooter>
      </form>
    </Card>
  );
}
