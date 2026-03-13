import { useState } from 'react';
import { Calendar, Clock, Video, ArrowRight, X, Phone } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function BookingModal({ open, onOpenChange }: BookingModalProps) {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-2xl w-full p-0 overflow-hidden border-0">
          <div className="bg-white dark:bg-background">
            <DialogHeader className="px-6 pt-6 pb-4">
              <DialogTitle className="flex items-center gap-2 text-2xl">
                <Phone className="w-6 h-6 text-orange-500" />
                Schedule a Consultation
              </DialogTitle>
              <p className="text-sm text-muted-foreground mt-2 text-left">
                Book a 30-minute strategy session to discuss your goals and how I can help.
              </p>
            </DialogHeader>

            <div className="px-6 pb-6 space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-orange-50 dark:from-blue-950/30 dark:to-orange-950/30 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">30-Minute Meeting</h3>
                      <p className="text-sm text-muted-foreground">Select a time that works for you</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Video className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Online Meeting</h3>
                      <p className="text-sm text-muted-foreground">Zoom, Google Meet, or Teams</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Flexible Scheduling</h3>
                      <p className="text-sm text-muted-foreground">Monday to Friday, 9AM-5PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowCalendly(true)}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-900 to-orange-500 hover:from-blue-800 hover:to-orange-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 group"
              >
                Book Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4 pointer-events-auto" onClick={() => setShowCalendly(false)}>
          <div className="bg-white dark:bg-background rounded-xl w-full max-w-3xl h-[90vh] flex flex-col shadow-2xl pointer-events-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white dark:bg-background p-4 border-b border-gray-200 dark:border-border flex justify-between items-center rounded-t-xl">
              <h3 className="text-xl font-bold text-foreground">Schedule Your Call</h3>
              <button
                onClick={() => setShowCalendly(false)}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-auto" style={{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <iframe
                src="https://calendly.com/isaac-tashlex/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Calendly Scheduling Widget"
                style={{ border: 'none', display: 'block' }}
                allow="geolocation; microphone; camera"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}