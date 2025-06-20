"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { phases } from "@/data/phases";

export function PhasesAccordion() {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {phases.map((phase, index) => (
        <Card key={index} className="overflow-hidden hover:bg-gray-100">
          <AccordionItem value={`phase-${index}`} className="border-0 ">
            <AccordionTrigger className="px-6 py-1 hover:no-underline ">
              <h3 className="text-lg font-semibold text-left">{phase.title}</h3>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Who You Are
                    </h4>
                    <div className="pl-4 border-l-2 border-purple-500">
                      <h5 className="font-semibold text-gray-800">
                        {phase.who.title}
                      </h5>
                      <p className="text-gray-600 mt-1">
                        {phase.who.description}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      What You Want
                    </h4>
                    <div className="pl-4 border-l-2 border-purple-500">
                      <h5 className="font-semibold text-gray-800">
                        {phase.want.title}
                      </h5>
                      <p className="text-gray-600 mt-1">
                        {phase.want.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      How You Evolve
                    </h4>
                    <div className="pl-4 border-l-2 border-purple-500">
                      <h5 className="font-semibold text-gray-800">
                        {phase.evolve.title}
                      </h5>
                      <p className="text-gray-600 mt-1">
                        {phase.evolve.description}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Evenica Approach
                    </h4>
                    <div className="pl-4 border-l-2 border-purple-500">
                      <h5 className="font-semibold text-gray-800">
                        {phase.approach.title}
                      </h5>
                      <p className="text-gray-600 mt-1">
                        {phase.approach.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Card>
      ))}
    </Accordion>
  );
}
