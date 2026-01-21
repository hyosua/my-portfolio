import React, { useState } from "react";
import { useTranslations } from "@/i18n/utils";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import MotionWrapper from "./MotionWrapper";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
// Optionnel : Importez une icône de chargement (ex: lucide-react)
import { Loader2 } from "lucide-react";

export default function ContactSection({
  lang,
}: {
  readonly lang: "fr" | "en";
}) {
  const t = useTranslations(lang);

  // États pour gérer l'envoi
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [result, setResult] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);

    // On ajoute manuellement la clé d'accès (plus propre que le champ caché)
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
        console.error("Error", data);
        setResult(data.message);
        setStatus("error");
      }
    } catch (error) {
      console.error("Submit error", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-12 relative">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center md:text-left uppercase">
            {t("section.contact")}
          </h2>
        </MotionWrapper>

        <MotionWrapper delay={0.2}>
          <Card className="dark:border-purple-500/10">
            <CardHeader>
              <CardTitle className="text-center">
                {t("contact.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {status === "success" ? (
                <div className="text-center py-12 flex flex-col items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-500 text-2xl">✓</span>
                  </div>
                  <p className="text-xl font-medium">
                    {lang === "fr" ? "Message envoyé !" : "Message sent!"}
                  </p>
                  <p className="text-muted-foreground">
                    {lang === "fr"
                      ? "Je reviendrai vers vous rapidement."
                      : "I'll get back to you shortly."}
                  </p>
                  <Button
                    onClick={() => setStatus("idle")}
                    variant="outline"
                    className="mt-4"
                  >
                    {lang === "fr"
                      ? "Envoyer un autre message"
                      : "Send another message"}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Champ pour empêcher le spam (Honeypot) */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: "none" }}
                  />

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name">{t("contact.name")}</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      className="p-2 bg-transparent border rounded-md"
                      required
                      disabled={status === "loading"}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">{t("contact.emailLabel")}</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      className="p-2 bg-transparent border rounded-md"
                      required
                      disabled={status === "loading"}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message">{t("contact.message")}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="p-2 bg-transparent border rounded-md"
                      required
                      disabled={status === "loading"}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-sm bg-red-500/10 p-3 rounded-md">
                      {lang === "fr" ? "Erreur : " : "Error: "}{" "}
                      {result || "Un problème est survenu."}
                    </p>
                  )}

                  <Button
                    type="submit"
                    variant="secondary"
                    className="self-center mt-4 min-w-37.5"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {lang === "fr" ? "Envoi..." : "Sending..."}
                      </>
                    ) : (
                      t("contact.send")
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </MotionWrapper>
      </div>
    </section>
  );
}
