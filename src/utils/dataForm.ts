const capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

export const formatarData = (): string => {
    const date = new Date();
  
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',  
      year: 'numeric',  
      month: 'long',    
      day: '2-digit'    
    };
  
    const formatedDate = date.toLocaleDateString('pt-BR', options);

    const newFormatedDate = capitalizeFirstLetter(formatedDate);
  
    return newFormatedDate;
  };