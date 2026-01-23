
import React from "react";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";


type VeilleArticle = {
  id: string;
  body: string;
  data: {
    title: string;
    source: string;
    publishDate: Date;
    originalUrl: string;
    tags: string[];
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
              <a
                href={article.data.originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-full flex"
              >
                <GlassCard className="group overflow-hidden dark:border-purple-500/10 h-full flex flex-col w-full">
                  <CardHeader className="bg-linear-to-r from-purple-500/5 to-pink-500/5">
                    <CardTitle className="text-center group-hover:text-purple-500 transition-colors duration-300">
                      {article.data.title}
                    </CardTitle>
                     <CardDescription className="text-center">
                      {article.data.source} - {" "}
                      {new Date(article.data.publishDate).toLocaleDateString(lang)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 py-4">
                    <div className="prose prose-sm dark:prose-invert max-w-none">
                     <p>{article.body}</p>
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
              </a>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VeilleSection;
