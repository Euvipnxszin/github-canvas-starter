
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';

interface NotificationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationForm = ({ isOpen, onClose }: NotificationFormProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "E-mail inválido",
        description: "Por favor, insira um e-mail válido.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simular envio (aqui você integraria com seu backend)
    setTimeout(() => {
      toast({
        title: "Cadastro realizado!",
        description: "Você será notificado quando os estudos de caso estiverem disponíveis.",
      });
      setEmail('');
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl font-playfair">
            <Mail className="h-5 w-5 text-orange-500" />
            Seja Notificado do Lançamento
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 pt-4">
          <p className="text-gray-600 text-sm">
            Deixe seu melhor e-mail e seja o primeiro a receber nossos estudos de caso detalhados quando ficarem prontos.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu melhor e-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="seuemail@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            
            <div className="flex gap-2 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
                disabled={isSubmitting}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Cadastrando...' : 'Quero ser Notificado'}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NotificationForm;
