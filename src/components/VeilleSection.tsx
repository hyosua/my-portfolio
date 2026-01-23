
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

  const openModal = (article: VeilleArticle) => {
    setSelectedArticle(article);
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

  return (
    <section id="veille" className="py-12 relative">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center md:text-left uppercase">
            {title}
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <MotionWrapper key={article.id} delay={index * 0.2}>
              <div
                onClick={() => openModal(article)}
                className="cursor-pointer h-full flex"
              >
                <GlassCard className="group overflow-hidden dark:border-purple-500/10 h-full flex flex-col w-full">
                  <CardHeader className="bg-linear-to-r from-purple-500/5 to-pink-500/5">
                    <CardTitle className="text-center group-hover:text-purple-500 transition-colors duration-300">
                      {article.data.title}
                    </CardTitle>
                    <CardDescription className="text-center">
                      {article.data.source} -{" "}
                      {new Date(article.data.publishDate).toLocaleDateString(
                        lang
                      )}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 py-4">
                    <img
                      src={article.data.image}
                      alt={article.data.title}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <div className="prose prose-sm dark:prose-invert max-w-none mt-4">
                      <p>{article.data.description}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex-wrap justify-center md:justify-start items-center border-t border-border/30 bg-linear-to-r from-purple-500/5 to-pink-500/5 pt-4">
                    <div className="flex flex-wrap gap-2 mt-4">
                      {article.data.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="text-xs bg-purple-500/10 text-purple-500 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardFooter>
                </GlassCard>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>

      {selectedArticle && (
        <Modal isOpen={!!selectedArticle} onClose={closeModal}>
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-2">
              {selectedArticle.data.title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {selectedArticle.data.source} -{" "}
              {new Date(selectedArticle.data.publishDate).toLocaleDateString(
                lang
              )}
            </p>
            <div
              className="mt-4"
              dangerouslySetInnerHTML={{
                __html: marked(selectedArticle.body),
              }}
            />
            <div className="mt-6">
              <a
                href={selectedArticle.data.originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:underline"
              >
                Lire l'article original
              </a>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}

export default VeilleSection;
