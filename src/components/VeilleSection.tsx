
import React, { useState } from "react";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";
import Modal from "./ui/modal";
import { marked } from "marked";
import { useTranslations } from "@/i18n/utils";
import { Link } from "lucide-react";

type VeilleArticle = {
  id: string;
  body: string;
  data: {
    title: string;
    source: string;
    publishDate: Date;
    originalUrl: string;
    tags: string[];
    image: string;
    description: string;
  };
};

function VeilleSection({
  title,
  lang,
  articles,
}: {
  readonly title: string;
  readonly lang: "fr" | "en";
  readonly articles: VeilleArticle[];
}) {
  const [selectedArticle, setSelectedArticle] = useState<VeilleArticle | null>(
    null
  );
  const t = useTranslations(lang);
  const openModal = (article: VeilleArticle) => {
    setSelectedArticle(article);
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

  marked.setOptions({
    breaks: true,
  }); 

return (
    <section id="veille" className="py-24 relative overflow-hidden">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-3xl font-bold tracking-tighter mb-16 text-center md:text-left uppercase bg-clip-text text-transparent bg-linear-to-tr from-foreground to-primary">
            {title}
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <MotionWrapper key={article.id} delay={index * 0.1}>
              <button
                onClick={() => openModal(article)}
                aria-label={`${t("projects.view_details" as any)} ${article.data.title}`}
                className="group/card cursor-pointer h-full flex w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
              >
                <GlassCard className="overflow-hidden border-border/50 transition-all duration-500 
                                     group-hover/card:border-primary/40 
                                     group-hover/card:shadow-[0_0_30px_rgba(var(--color-primary),0.1)] 
                                     h-full flex flex-col w-full">
                  
                  {/* Image avec zoom subtil au hover */}
                  <div className="overflow-hidden h-48">
                    <img
                      src={article.data.image}
                      alt={article.data.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                    />
                  </div>

                  <CardHeader className="bg-primary/5 space-y-2">
                    <CardTitle className="text-lg leading-tight group-hover/card:text-primary transition-colors">
                      {article.data.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-primary/60">
                      {article.data.source} • {new Date(article.data.publishDate).toLocaleDateString(lang)}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 py-6">
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {article.data.description}
                    </p>
                  </CardContent>

                  <CardFooter className="border-t border-border/30 bg-primary/5 py-4">
                    <div className="flex flex-wrap gap-2">
                      {article.data.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold uppercase tracking-tighter bg-primary/10 text-primary px-2 py-1 rounded-md border border-primary/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardFooter>
                </GlassCard>
              </button>
            </MotionWrapper>
          ))}
        </div>
      </div>

      {/* MODAL - Nettoyage des couleurs purple */}
      {selectedArticle && (
        <Modal isOpen={!!selectedArticle} onClose={closeModal} closeLabel={t("common.close" as any)}>
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              {selectedArticle.data.title}
            </h2>
            <p className="text-xs uppercase tracking-widest font-bold text-primary mb-8">
              {selectedArticle.data.source} — {new Date(selectedArticle.data.publishDate).toLocaleDateString(lang)}
            </p>
            <div
              className="mt-4 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: marked(selectedArticle.body) }}
            />
            <div className="mt-12 pt-6 border-t border-border">
              <a
                href={selectedArticle.data.originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-bold text-primary hover:opacity-70 transition-all"
              >
                <Link className="mr-2" size={18}></Link> {t("veille.readOriginal")}
              </a>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}

export default VeilleSection;
