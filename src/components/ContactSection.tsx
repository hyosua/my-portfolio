import React, { useState } from "react";
import { useTranslations } from "@/i18n/utils";
import { Button } from "./ui/button";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { GlassCard } from "./ui/glass-card"; // Utilisation de ta GlassCard
import MotionWrapper from "./MotionWrapper";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactSection({
  lang,
}: {
  readonly lang: "fr" | "en";
}) {
  const t = useTranslations(lang);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [result, setResult] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "de5516e7-650e-452e-9b17-4f8cde01b6a1");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setResult(data.message);
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Glow d'ambiance */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-primary/5 blur-[120px] -z-10" />

      <div className="container max-w-2xl mx-auto px-6">
        <MotionWrapper>
          <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center uppercase bg-clip-text text-transparent bg-linear-to-tr from-foreground to-primary">
            {t("section.contact")}
          </h2>
        </MotionWrapper>

        <MotionWrapper delay={0.2}>
          <GlassCard className="border-border overflow-hidden shadow-2xl shadow-primary/5">
            <CardHeader className="bg-primary/5 border-b border-border/10 pb-8">
              <CardTitle className="text-center text-xl font-bold tracking-tight text-primary">
                {t("contact.title")}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="pt-8">
              {status === "success" ? (
                <div className="text-center py-10 flex flex-col items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="text-primary h-8 w-8" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold tracking-tight">
                      {lang === "fr" ? "Message envoyé !" : "Message sent!"}
                    </p>
                    <p className="text-muted-foreground">
                      {lang === "fr" ? "Je reviendrai vers vous rapidement." : "I'll get back to you shortly."}
                    </p>
                  </div>
                  <Button
                    onClick={() => setStatus("idle")}
                    variant="ghost"
                    className="mt-6 hover:bg-primary/10 text-primary"
                  >
                    {lang === "fr" ? "Envoyer un autre message" : "Send another message"}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                  <input type="checkbox" name="botcheck" className="hidden" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-1">
                        {t("contact.name")}
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        className="bg-background/50 border-border/40 focus:border-primary/50 focus:ring-primary/20 transition-all rounded-xl"
                        required
                        disabled={status === "loading"}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-1">
                        {t("contact.emailLabel")}
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        className="bg-background/50 border-border/40 focus:border-primary/50 focus:ring-primary/20 transition-all rounded-xl"
                        required
                        disabled={status === "loading"}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-1">
                      {t("contact.message")}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder={lang === "fr" ? "Dites-moi tout..." : "Tell me everything..."}
                      className="bg-background/50 border-border/40 focus:border-primary/50 focus:ring-primary/20 transition-all rounded-xl resize-none"
                      required
                      disabled={status === "loading"}
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-3 p-4 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive text-sm">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <p>{result || (lang === "fr" ? "Un problème est survenu." : "Something went wrong.")}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full md:w-auto md:min-w-45 self-center py-6 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 group cursor-pointer"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {lang === "fr" ? "Envoi..." : "Sending..."}
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 group-hover:rotate-45 transition-transform" />
                        {t("contact.send")}
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </GlassCard>
        </MotionWrapper>
      </div>
    </section>
  );
}