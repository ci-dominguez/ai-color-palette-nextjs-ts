interface IconProps {
  className?: string;
}

const Blob = ({ className }: IconProps) => {
  return (
    <svg
      width='12'
      height='13'
      viewBox='0 0 12 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path d='M9.6925 2.44512C9.55698 2.31641 9.41468 2.19449 9.27239 2.06579C8.75741 1.51711 8.16115 1.0497 7.48354 0.731332C7.37512 0.683916 7.25993 0.643285 7.14474 0.61619C6.81949 0.460393 6.48065 0.324905 6.13507 0.223299C4.83407 -0.162806 3.33656 -0.0611696 2.15075 0.629755C-0.322502 2.06579 -0.336022 5.37138 0.490656 7.77607C1.36477 10.2959 3.59408 12.5583 6.46035 12.2874C9.18432 12.03 10.9732 9.53725 11.0951 6.92935C11.1561 5.59491 10.7631 4.23339 10.0517 3.08185C9.99744 2.84477 9.88223 2.61446 9.69928 2.44512H9.6925Z' />
    </svg>
  );
};

export default Blob;
